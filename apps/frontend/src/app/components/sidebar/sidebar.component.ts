import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarData } from './sidebar-data';
import { toSignal } from '@angular/core/rxjs-interop';

interface MenuItem {
  id: number;
  icon: string;
  name: string;
  routerLink: string;
}

@Component({
  selector: 'fdw-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  host: {
    '[class]': 'this.sidebarStyle()',
  },

  template: `
    <a routerLink="/dashboard" class="flex justify-start gap-4 items-center h-20">
      <div
        class="flex items-center justify-center m-auto  bg-gradient-primary p-1.5 text-secondary rounded-xl font-bold"
      >
        <svg class="size-6 text-current" aria-hidden="true" focusable="false">
          <use href="assets/icons/sprite.svg#i-suitcase"></use>
        </svg>
      </div>
      <div>
        <h1 class="font-bold text-lg bg-gradient-primary clip-text ">JobTracker</h1>
        <p class="text-xs text-muted-foreground">Votre succès commence ici</p>
      </div>
    </a>
    <nav class="flex flex-col justify-center gap-3 mt-8 px-3">
      @for (menu of sidebar(); track menu.id) {
      <a
        class="flex w-43 h-8 items-center gap-4 py-1 pl-4 hover:text-primary-foreground
         hover:bg-gradient-primary cursor-pointer rounded-xl
         text-muted-foreground text-sm"
        (click)="toggleSidebar()"
        routerLinkActive="active-link"
        [routerLinkActiveOptions]="{ exact: true }"
        [routerLink]="menu.routerLink"
      >
        <svg class="size-5 shrink-0 [stroke-width:1] text-current" aria-hidden="true" focusable="false">
          <use [attr.href]="menu.icon"></use>
        </svg>
        <span class="flex justify-center items-center h-5">{{ menu.name }}</span>
      </a>
      }
    </nav>
    <button
      class="text-muted rounded-md px-4 py-2 absolute bottom-5 right-4 left-4 bg-red-700/75 cursor-pointer hover:bg-red-700/80 font-bold"
    >
      Déconnexion
    </button>
  `,
})
export class SidebarComponent implements OnInit {
  protected readonly sidebarService = inject(SidebarData);
  protected readonly router = inject(Router);

  protected isSidebarOpen = toSignal(this.sidebarService.showSidebar$, { initialValue: false });
  protected sidebarStyle = toSignal(this.sidebarService.styleSidebar$, { initialValue: 'hidden' });

  protected readonly sidebar = signal<MenuItem[]>([
    {
      id: 1,
      icon: 'assets/icons/sprite.svg#i-dashboard',
      name: 'Dashboard',
      routerLink: '/dashboard',
    },
    {
      id: 2,
      icon: 'assets/icons/sprite.svg#i-suitcase',
      name: 'Candidatures',
      routerLink: '/candidatures',
    },
  ]);

  ngOnInit() {
    this.isSidebarOpen();
  }

  toggleSidebar = () => (window.innerWidth < 720 ? this.sidebarService.toggleSidebar() : null);
}
