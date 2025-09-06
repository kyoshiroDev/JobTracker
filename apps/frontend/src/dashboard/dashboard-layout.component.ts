import { ChangeDetectionStrategy, Component, computed, signal, WritableSignal } from '@angular/core';
import { ButtonComponent } from '../app/components/button/button.component';
import { CandidatureFormComponent } from '../candidatures/candidature-form/candidature-form.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { SidebarComponent } from '../app/components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'fdw-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CandidatureFormComponent, HeaderComponent, SidebarComponent, ButtonComponent, RouterOutlet],
  host: {
    class: 'flex min-h-dvh bg-jobtracker-background',
  },
  template: `
    @if (showModal()) {
    <fdw-candidatures-form (modalClose)="openModal()" />
    }
    <!-- Sidebar fixe -->
    <fdw-sidebar (closeSideBar)="openSideBar()" [class]="sideBarClass()" />
    <div class="flex flex-col gap-4 w-full">
      <!-- Header -->
      <fdw-header (openSideBar)="openSideBar()" />
      <div class="flex flex-col justify-start mx-auto gap-15 w-7xl h-full bg-jobtracker-background">
        <router-outlet />
      </div>
      <fdw-button (click)="openModal()" class="lg:flex lg:justify-center" />
    </div>
  `,
})
export class DashboardLayoutComponent {
  protected readonly showModal: WritableSignal<boolean> = signal(false);
  protected readonly showSideBar: WritableSignal<boolean> = signal(false);

  protected openModal() {
    this.showModal.set(!this.showModal());
  }

  protected openSideBar() {
    this.showSideBar.set(!this.showSideBar());
  }

  protected sideBarClass = computed(() => {
    return this.showSideBar() ? 'translate-x-0' : '-translate-x-full lg:translate-x-0';
  });
}
