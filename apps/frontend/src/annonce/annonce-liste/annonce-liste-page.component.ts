import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { AnnoncesService } from '../annonces.service';
import { Annonce } from '../annonce';
import { AnnonceFormSearchComponent } from '../annonce-form/annonce-form-search.component';
import { AnnonceCardComponent } from './annonce-card.component';

@Component({
  selector: 'fdw-annonce',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AnnonceFormSearchComponent, AnnonceCardComponent],
  template: `
    <fdw-annonce-form-search
      [annonces]="annonces()"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
        @for (annonce of this.annoncesService.filteredAnnonces(); track annonce.id) {
          <fdw-annonce-card [annonce]="annonce" />
        } @empty {
          @for (annonce of annonces(); track annonce.id) {
        <fdw-annonce-card [annonce]="annonce" />
      }
        }
    </div>
  `,
})
export class AnnonceListePageComponent {
  protected readonly annoncesService = inject(AnnoncesService);
  protected readonly annonces: Signal<Annonce[]> = this.annoncesService.getAll();
}
