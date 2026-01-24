import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../app/components/sidebar/sidebar.component';
import { Header } from '../../app/components/header';

@Component({
  selector: 'fdw-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Header, RouterOutlet, SidebarComponent, SidebarComponent],
  host: {
    class: 'flex flex-1 w-screen h-screen ',
  },
  template: `
    <fdw-sidebar />
    <div class="relative flex flex-1 flex-col">
      <fdw-header />
      <div class="flex w-full h-full flex-col justify-start gap-8 overflow-x-scroll">
        <router-outlet />
      </div>
    </div>
  `,
})
export class DashboardLayoutComponent {}
