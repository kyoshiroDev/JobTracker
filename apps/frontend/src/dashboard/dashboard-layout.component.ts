import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { HeaderComponent } from '../app/components/header.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../app/components/sidebar/sidebar.component';

@Component({
  selector: 'fdw-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent, RouterOutlet, SidebarComponent],
  host: {
    class: 'flex flex-1 w-screen h-screen',
  },
  template: `
    <fdw-sidebar [class]="styleSidebar()" />
    <div class="relative flex flex-1 flex-col">
      <!-- Header -->
      <fdw-header (sidebar)="toggleSidebar()" />
      <div class="flex w-full h-full flex-col justify-start gap-8 px-4 md:px-60">
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
    return this.showSidebar() ?
      'flex fixed relative -translate-x-0 transition-all ease-in-out duration-300 opacity-100'
      :
      'fixed flex -translate-x-full transition-all ease-in-out duration-300 opacity-0';
  })
}
