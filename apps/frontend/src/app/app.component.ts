import {
  ChangeDetectionStrategy,
  Component, ElementRef, inject,
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
      <fdw-annonce-form (modalClose)="closeModal()" />
      }
      <!-- Sidebar fixe -->
      @if (showSideBar()){
        <fdw-sidebar (closeSideBar)="closeSide()" class="fixed z-3 w-fit h-1/1 md:block md:relative md:z-0"/>
      }
      @defer {<fdw-sidebar class="hidden md:block md:relative md:z-0"/>}

      <!-- Header -->
      <fdw-header class="lg:pl-[250px] fixed w-full" (openSideBar)="openSide()"/>

      <!-- Contenu des pages selon les routes -->
      <main class="w-full mx-auto mt-[120px] max-h-dvh overflow-y-auto px-4">
        <router-outlet></router-outlet>
        <fdw-button (click)="openModal()" class="lg:flex lg:justify-center" />
      </main>
    </div>
  `,
})
export class AppComponent {
  private el = inject(ElementRef)
  showModal: WritableSignal<boolean> = signal(false);
  showSideBar: WritableSignal<boolean> = signal(false);

  protected openModal() {
    this.showModal.set(true);
  }

  protected closeModal() {
    this.showModal.set(false);
  }

  openSide(): void{
    if (this.showSideBar) {
      this.showSideBar.set(true);
    }
  }

  closeSide() {
    this.showSideBar.set(false);
  }
}
