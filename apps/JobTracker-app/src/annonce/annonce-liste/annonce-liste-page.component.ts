import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Signal,
  signal,
} from '@angular/core';
import { AnnoncesService } from '../annonces.service';
import { Annonce } from '../annonce';
import { AnnonceFormSearchComponent } from '../annonce-form/annonce-form-search.component';
import { Router } from '@angular/router';
import { AnnonceCardComponent } from './annonce-card.component';

@Component({
  selector: 'fdw-annonce',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AnnonceFormSearchComponent, AnnonceCardComponent],
  template: `
    <fdw-annonce-form-search
      [annonces]="annonces()"
      (formValue)="annonceSearch.set($event)"
      (resetForm)="annonceSearch.set({})"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-8 mt-5">
      @for (annonce of annonceFilter(); track annonce.id) {
      <fdw-annonce-card [annonce]="annonce" />
      } @empty { @for (annonce of annonces(); track annonce.id) {
      <fdw-annonce-card [annonce]="annonce" />
      } }
    </div>
  `,
})
export class AnnonceListePageComponent {
  protected readonly annoncesService = inject(AnnoncesService);
  protected readonly router = inject(Router);

  protected readonly annonces: Signal<Annonce[]> =
    this.annoncesService.getAll();

  annonceSearch = signal<AnnonceFormSearchComponent['researchForm']['value']>(
    {}
  );

  annonceFilter = computed(() => {
    const search = this.annonceSearch();
    if (!search || Object.keys(search).length === 0) {
      return this.annonces();
    }
    return this.annonces().filter(
      (annonce) =>
        annonce.poste
          .toLocaleLowerCase()
          .trim()
          .replaceAll(' ', '')
          .replaceAll('-', '')
          .replaceAll('é', 'e') ===
          search.poste
            ?.toLocaleLowerCase()
            .trim()
            .replaceAll(' ', '')
            .replaceAll('-', '') ||
        annonce.entreprise.name === search.entreprise?.name ||
        annonce.entreprise.ville === search.entreprise?.ville ||
        annonce.content.salaire.toString() ===
          search.content?.salaire?.toString() ||
        annonce.content.status === search.content?.status
    );
  });
}
