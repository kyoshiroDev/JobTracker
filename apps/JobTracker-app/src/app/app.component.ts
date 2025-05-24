import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
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
      @if (showModal()) { @defer {
      <fdw-annonce-form (modalClose)="closeModal()" />
      } }
      <!-- Sidebar fixe -->
      <fdw-sidebar />

      <!-- Header -->
      <fdw-header class="2xl:pl-[300px] fixed w-full" />

      <!-- Contenu des pages selon les routes -->
      <main class="w-full mx-auto mt-[120px] max-h-dvh overflow-y-auto">
        <router-outlet></router-outlet>
        <fdw-button (click)="openModal()" class="lg:flex lg:justify-center" />
      </main>
    </div>
  `,
})
export class AppComponent {
  showModal: WritableSignal<boolean> = signal(false);

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }
}
