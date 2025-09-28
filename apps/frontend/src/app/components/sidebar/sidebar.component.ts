import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Sidebarmenu } from './sidebarmenu';

@Component({
  selector: 'fdw-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  host: {
    class:
      'flex flex-col gap-4 border-r border-solid h-screen w-fit bg-background p-4',
  },
  template: `
    <a routerLink="/dashboard" class="flex justify-start gap-4 items-center h-20">
      <div
        class="flex items-center justify-center m-auto  bg-gradient-primary p-1.5 text-secondary rounded-xl font-bold"
      >
        <svg
          class="size-6 text-current"
          aria-hidden="true"
          focusable="false">
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
          (click)="closeSideBar.emit()"
          routerLinkActive="active-link"
          [routerLinkActiveOptions]="{ exact: true }"
          [routerLink]="menu.routerLink"
        >
          <svg
            class="size-5 shrink-0 [stroke-width:1] text-current"
            aria-hidden="true"
            focusable="false"
          >
            <use [attr.href]="menu.icon"></use>
          </svg>
          <span class="h-5 mt-px">{{ menu.name }}</span>
        </a>

      }
    </nav>
  `,
})
export class SidebarComponent {
  protected readonly router = inject(Router);
  protected readonly closeSideBar = output();

  protected readonly sidebar = signal<Sidebarmenu[]>([
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
}
