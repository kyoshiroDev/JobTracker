import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from '../../app/components/header';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../app/components/sidebar/sidebar.component';

@Component({
  selector: 'fdw-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Header, RouterOutlet, SidebarComponent],
  host: {
    class: 'flex flex-1 w-screen h-screen overflow-x-scroll',
  },
  template: `
    <fdw-sidebar />
    <div class="relative flex flex-1 flex-col">
      <fdw-header />
      <div class="flex w-full h-full flex-col justify-start gap-8">
        <router-outlet />
      </div>
    </div>
  `,
})
export class DashboardLayoutComponent {}
