import {
  ChangeDetectionStrategy,
  Component, computed,
  signal,
  WritableSignal
} from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AnnonceFormComponent } from '../annonce/annonce-form/annonce-form.component';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'fdw-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SidebarComponent,
    RouterOutlet,
    HeaderComponent,
    AnnonceFormComponent,
    ButtonComponent,
  ],
  template: `
    <div class="flex h-dvh">
      @if (showModal()) {
      <fdw-annonce-form (modalClose)="openModal()" />
      }
      <!-- Sidebar fixe -->
      <fdw-sidebar
        (closeSideBar)="openSideBar()"
        class="fixed top-0 left-0 h-full w-64 text-white transition-transform duration-300 ease-in-out z-50 lg:relative lg:translate-x-0"
        [class]="sideBarClass()"
      />

      <!-- Header -->
      <fdw-header
        class="lg:pl-[250px] fixed w-full"
        (openSideBar)="openSideBar()"
      />

      <!-- Contenu des pages selon les routes -->
      <main
        class="w-full mx-auto mt-[80px] md:mt-[120px] max-h-dvh overflow-y-auto px-4"
      >
        <router-outlet></router-outlet>
        <fdw-button (click)="openModal()" class="lg:flex lg:justify-center" />
      </main>
    </div>
  `,
})
export class AppComponent {
  protected readonly showModal: WritableSignal<boolean> = signal(false);
  protected readonly showSideBar: WritableSignal<boolean> = signal(false);

  protected openModal() {
    this.showModal.set(!this.showModal());
  }

  protected openSideBar() {
    this.showSideBar.set(!this.showSideBar());
  }

  protected sideBarClass = computed(() => {
   return this.showSideBar()
     ? 'translate-x-0'
     : '-translate-x-full lg:translate-x-0';
  })
}
