import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '@apps/frontend/auth/auth.service';
import { SidebarData } from '@apps/frontend/app/components/sidebar/sidebar-data';

type MenuItem = {
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
    <div class="flex flex-col justify-between h-full">
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
        <svg class="size-5 shrink-0 stroke-1 text-current" aria-hidden="true" focusable="false">
          <use [attr.href]="menu.icon"></use>
        </svg>
        <span class="flex justify-center items-center h-5">{{ menu.name }}</span>
      </a>
      }
    </nav>
    <button
      (click)="this.logOut()"
      class="w-full rounded-lg text-red-500/90 h-10 font-medium cursor-pointer"
    >
      Déconnexion
    </button>
    </div>
  `,
})
export class SidebarComponent implements OnInit {
  protected readonly sidebarService = inject(SidebarData);
  protected readonly authService = inject(AuthService);
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

  logOut() {
    this.authService.signOut()
    this.router.navigate(['/auth/login'])
  };
}
