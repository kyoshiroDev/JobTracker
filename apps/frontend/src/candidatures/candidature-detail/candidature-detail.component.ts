import { ChangeDetectionStrategy, Component, computed, inject, input, Signal } from '@angular/core';
import { Candidature } from '../candidature';
import { CandidaturesService } from '../candidatures.service';

import { Router } from '@angular/router';
import { CandidatureDetailFooterComponent } from './candidature-detail-footer.component';
import { CandidatureDetailHeaderComponent } from './candidature-detail-header.component';
import { AnnonceDetailContentComponent } from './candidature-details-content.component';

@Component({
  selector: 'fdw-candidatures-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CandidatureDetailHeaderComponent, AnnonceDetailContentComponent, CandidatureDetailFooterComponent],
  template: `
    @if (annonce()) {
    <div class="max-w-2xl mx-auto bg-JobTracker-white rounded-lg shadow-xl shadow-slate-400 my-4 pb-4">
      <!-- En-tête de l'annonce -->
      <fdw-annonce-detail-header [annonce]="annonce()" />
      <!-- Contenu de l'annonce -->
      <fdw-annonce-detail-content [annonce]="annonce()" />
      <!-- Footer de l'annonce -->
      <fdw-annonce-detail-footer [annonce]="annonce()" />
    </div>
    } @else {
    <p>Chargement de l'annonce...</p>
    }
  `,
})
export class CandidatureDetailComponent {
  readonly annonceService = inject(CandidaturesService);
  readonly router = inject(Router);
  readonly id = input<string>();

  readonly annonces: Signal<Candidature[]> = this.annonceService.getAll();

  readonly annonce: Signal<Candidature | null> = computed(() => {
    if (!this.id()) {
      return null;
    }
    const found = this.annonces().find((annonce) => annonce.id.toString() === this.id());
    return found ?? null;
  });
}
