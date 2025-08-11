import { ChangeDetectionStrategy, Component, computed, signal, WritableSignal } from '@angular/core';
import { CandidaturesRecentesComponent } from './candidatures-recentes.component';
import { SuiviCandidaturesComponent } from './suivi-candidatures.component';
//import { TacheAFaireComponent } from './widgets/tache-a-faire/tache-a-faire.component';
import { ButtonComponent } from '../app/components/button/button.component';
import { AnnonceFormComponent } from '../annonce/annonce-form/annonce-form.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { SidebarComponent } from '../app/components/sidebar/sidebar.component';

@Component({
  selector: 'fdw-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SuiviCandidaturesComponent,
    CandidaturesRecentesComponent,
    AnnonceFormComponent,
    HeaderComponent,
    SidebarComponent,
    ButtonComponent,
    //TacheAFaireComponent,
  ],
  template: `
    @if (showModal()) {
    <fdw-annonce-form (modalClose)="openModal()" />
    }
    <!-- Sidebar fixe -->
    <fdw-sidebar
      (closeSideBar)="openSideBar()"
      class="fixed top-0 left-0 h-full w-64 text-white transition-transform duration-300 ease-in-out z-50 md:z-0 lg:relative lg:translate-x-0"
      [class]="sideBarClass()"
    />

    <!-- Header -->
    <fdw-header
      class="lg:pl-[250px] fixed w-full"
      (openSideBar)="openSideBar()"
    />
    <div
      class="py-6 lg:p-6 flex flex-col justify-start gap-15 max-w-dvw h-full"
    >
      <fdw-suivi-candidatures class="hidden lg:flex lg:justify-center" />
      <fdw-candidatures-recentes />
      <fdw-button (click)="openModal()" class="lg:flex lg:justify-center" />
    </div>
  `,
})
export class DashboardComponent {
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
  });
}
