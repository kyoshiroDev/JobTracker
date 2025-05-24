import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Annonce } from '../annonce';

@Component({
  selector: 'fdw-annonce-detail-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: ` <div class="mb-6 prose max-w-none">
    <h3>À propos de l’offre d’emploi :</h3>
    <p class="mb-2 pl-3">
      {{ annonce().content.about }}
    </p>
    <h3>Descriptif de la mission :</h3>
    <div class="mb-2 pl-7">
      <p class="list-disc">
        {{ annonce().content.descriptif }}
      </p>
    </div>
    <h3>Compétences rechercher :</h3>
    <div class="mb-2 pl-7">
      <p class="list-disc">
        {{ annonce().content.competence }}
      </p>
    </div>
    <h3>Avantage dans la société :</h3>
    <div class="mb-2 pl-7">
      <p class="list-disc">
        {{ annonce().content.avantage }}
      </p>
    </div>
  </div>`,
})
export class AnnonceDetailContentComponent {
  readonly annonce = input.required<Annonce>();
}
