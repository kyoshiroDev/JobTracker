import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SidebarData } from '../../app/components/sidebar/sidebar-data';
import { CandidaturesSearch } from './components/candidatures-search';

@Component({
  selector: 'fdw-candidatures-list',
  host: { class: 'flex flex-col gap-8 px-4 md:px-20 xl:px-60 h-screen' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CandidaturesSearch],
  template: ` <header>
      <h2 class="text-3xl font-bold text-foreground">Mes Candidatures</h2>
      <p class="text-muted-foreground/70">Gérez toutes vos candidatures en un seul endroit</p>
    </header>
    <fdw-candidatures-search />`,
})
export class CandidaturesList implements OnInit {
  protected readonly sidebarService = inject(SidebarData);
  protected isSidebarOpen = toSignal(this.sidebarService.showSidebar$, { initialValue: false });

  ngOnInit() {
    this.isSidebarOpen();
  }
}
