import { ChangeDetectionStrategy, Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarData } from './sidebar-data';

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
    '[class]': 'this.sidebarService.styleSidebar()',
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
  `,
})
export class SidebarComponent implements OnInit {
  protected readonly sidebarService = inject(SidebarData);
  protected readonly router = inject(Router);

  protected readonly sidebar = signal<MenuItem[]>([
    {
      id: 1,
      icon: 'assets/icons/sprite.svg#i-dashboard',
      name: 'Dashboard',
      routerLink: '/dashboard',
    },
    /*{
      id: 2,
      icon: 'assets/icons/sprite.svg#i-suitcase',
      name: 'Candidatures',
      routerLink: '/candidatures',
    },*/
  ]);

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth < 768) {
      this.sidebarService.showSidebar.set(false);
    } else {
      this.sidebarService.showSidebar.set(true);
    }
  }

  toggleSidebar = () => this.sidebarService.toggleSidebar();
}
