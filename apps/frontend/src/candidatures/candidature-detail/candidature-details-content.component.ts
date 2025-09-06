import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Candidature } from '../candidature';

@Component({
  selector: 'fdw-candidatures-detail-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: ` <div aria-label="Contenu de l'annonce" class="p-4 prose border-2 border-slate-300 mx-4 rounded-lg">
    <h3 class="text-lg md:text-xl">À propos de l’offre d’emploi :</h3>
    <p class="text-sm/7 md:text-md pb-4">
      {{ annonce().content.about }}
    </p>
    <h3 class="text-lg md:text-xl">Descriptif de la mission :</h3>
    <p class="text-sm/6 md:text-md pb-4">
      {{ annonce().content.description }}
    </p>
    <h3 class="text-lg md:text-xl">Compétences rechercher :</h3>
    <p class="text-sm/6 md:text-md pb-4">
      {{ annonce().content.skills }}
    </p>
    <h3 class="text-lg md:text-xl">Avantage dans la société :</h3>
    <p class="text-sm/6 md:text-md pb-4">
      {{ annonce().content.benefits }}
    </p>
  </div>`,
})
export class AnnonceDetailContentComponent {
  readonly annonce = input.required<Candidature>();
}
