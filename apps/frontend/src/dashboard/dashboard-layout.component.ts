import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { HeaderComponent } from '../app/components/header.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../app/components/sidebar/sidebar.component';

@Component({
  selector: 'fdw-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent, RouterOutlet, SidebarComponent],
  host: {
    class: 'flex min-h-dvh',
  },
  template: `
    <fdw-sidebar [class]="styleSidebar()" />
    <div class="flex flex-col gap-4 w-full">
      <!-- Header -->
      <fdw-header (sidebar)="toggleSidebar()" />
      <div class="flex flex-col justify-start gap-4 h-full px-4 md:px-30">
        <router-outlet />
      </div>
    </div>
  `,
})
export class DashboardLayoutComponent {
  protected showSidebar = signal<boolean>(true);

  toggleSidebar(){
    this.showSidebar.update(v => !v);
  };

  styleSidebar = computed(() => {
    return this.showSidebar() ? 'hidden md:block transition-all ease-in-out duration-300' : 'bock md:hidden transition-all ease-in-out duration-300';
  })
}
