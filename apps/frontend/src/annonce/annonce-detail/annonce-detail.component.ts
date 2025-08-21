import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  Signal,
} from '@angular/core';
import { Annonce } from '../annonce';
import { AnnoncesService } from '../annonces.service';

import { Router } from '@angular/router';
import { AnnonceDetailFooterComponent } from './annonce-detail-footer.component';
import { AnnonceDetailHeaderComponent } from './annonce-detail-header.component';
import { AnnonceDetailContentComponent } from './annonce-details-content.component';

@Component({
  selector: 'fdw-annonce-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AnnonceDetailHeaderComponent,
    AnnonceDetailContentComponent,
    AnnonceDetailFooterComponent,
  ],
  template: `
    @if (annonce()) {
    <div
      class="max-w-2xl mx-auto bg-JobTracker-white rounded-lg shadow-xl shadow-slate-400 my-4 pb-4"
    >
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
export class AnnonceDetailComponent {
  readonly annonceService = inject(AnnoncesService);
  readonly router = inject(Router);
  readonly id = input<string>();

  readonly annonces: Signal<Annonce[]> = this.annonceService.getAll();

  readonly annonce: Signal<Annonce | null> = computed(() => {
    if (!this.id()) {
      return null;
    }
    const found = this.annonces().find(
      (annonce) => annonce.id.toString() === this.id()
    );
    return found ?? null;
  });
}
