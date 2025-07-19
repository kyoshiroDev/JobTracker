import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Annonce } from '../annonce';

@Component({
  selector: 'fdw-annonce-detail-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: ` <div class="mb-6 prose max-w-none">
    <h3 class="text-lg md:text-xl">À propos de l’offre d’emploi :</h3>
    <p class="mb-2 pl-3 text-sm md:text-md">
      {{ annonce().content.about }}
    </p>
    <h3 class="text-lg md:text-xl">Descriptif de la mission :</h3>
    <div class="mb-2 pl-3">
      <p class="list-disc text-sm md:text-md">
        {{ annonce().content.description }}
      </p>
    </div>
    <h3 class="text-lg md:text-xl">Compétences rechercher :</h3>
    <div class="mb-2 pl-3">
      <p class="list-disc text-sm md:text-md">
        {{ annonce().content.skills }}
      </p>
    </div>
    <h3 class="text-lg md:text-xl">Avantage dans la société :</h3>
    <div class="mb-2 pl-3">
      <p class="list-disc text-sm md:text-md">
        {{ annonce().content.benifits }}
      </p>
    </div>
  </div>`,
})
export class AnnonceDetailContentComponent {
  readonly annonce = input.required<Annonce>();
}
