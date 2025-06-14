import { CommonModule } from '@angular/common';
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
import { AnnonceDetailContentComponent } from './annonce-details-content.component';
import { AnnonceDetailFooterComponent } from './annonce-detail-footer.component';
import { AnnonceDetailHeaderComponent } from './annonce-detail-header.component';

@Component({
  selector: 'fdw-annonce-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    AnnonceDetailHeaderComponent,
    AnnonceDetailContentComponent,
    AnnonceDetailFooterComponent,
  ],
  template: `
    @if (annonce()) {
    <div
      class="w-4xl mx-auto bg-JobTracker-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl my-6"
    >
      <!-- En-tête de l'annonce -->
      <fdw-annonce-detail-header
        (onClickReturn)="returnListeAnnonce()"
        class="text-JobTracker-white"
        [annonce]="annonce()"
      />

      <!-- Contenu de l'annonce -->
      <div class="p-6 overflow-y-scroll">
        <fdw-annonce-detail-content [annonce]="annonce()" />
      </div>
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
  readonly id = input<string | null>();

  readonly annonces: Signal<Annonce[]> = this.annonceService.getAll();

  readonly annonce: Signal<Annonce | any> = computed(() => {
    if (!this.id()) {
      return null;
    }
    return this.annonces().find(
      (annonce) => annonce.id.toString() === this.id()
    );
  });

  returnListeAnnonce() {
    this.router.navigate(['/annonces']);
  }
}
