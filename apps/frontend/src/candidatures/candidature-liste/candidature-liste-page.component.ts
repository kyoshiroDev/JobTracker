import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { CandidaturesService } from '../candidatures.service';
import { Candidature } from '../candidature';
import { CandidatureFormSearchComponent } from '../candidature-form/candidature-form-search.component';
import { CandidatureCardComponent } from './candidature-card.component';

@Component({
  selector: 'fdw-candidatures',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CandidatureFormSearchComponent, CandidatureCardComponent],
  template: `
    <fdw-candidatures-form-search [annonces]="annonces()" />
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
      @for (annonce of this.annoncesService.filteredAnnonces(); track annonce.id) {
      <fdw-candidatures-card [annonce]="annonce" />
      } @empty { @for (annonce of annonces(); track annonce.id) {
      <fdw-candidatures-card [annonce]="annonce" />
      } }
    </div>
  `,
})
export class CandidatureListePageComponent {
  protected readonly annoncesService = inject(CandidaturesService);
  protected readonly annonces: Signal<Candidature[]> = this.annoncesService.getAll();
}
