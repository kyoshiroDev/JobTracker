import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EntrepriseForm } from './annonceForm';

@Component({
  selector: 'fdw-entreprise-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: ` <fieldset
    [formGroup]="entrepriseForm()"
    class="flex flex-col gap-5 border border-JobTracker-blue p-5 rounded-md"
  >
    <legend
      class="text-center font-semibold text-2xl px-2 text-JobTracker-blue"
    >
      Entreprise
    </legend>
    <!-- Name -->
    <div
      class="flex w-full flex-col justify-center items-start gap-2 flex-nowrap"
    >
      <label for="name">Nom :</label>
      <input
        id="name"
        type="text"
        formControlName="name"
        placeholder="Google"
        class="text-gray-400 w-full h-12 border border-gray-600 bg-white px-2 py-1 text-sm rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
      />
    </div>
    <!-- Ville -->
    <div
      class="flex w-full flex-col justify-center items-start gap-2 flex-nowrap"
    >
      <label for="city">Ville :</label>
      <input
        id="city"
        type="text"
        formControlName="ville"
        placeholder="Paris"
        class="text-gray-400 w-full h-12 border border-gray-600 bg-white px-2 py-1 text-sm rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
      />
    </div>
    <!-- Phone -->
    <div
      class="flex w-full flex-col justify-center items-start gap-2 flex-nowrap"
    >
      <label for="phone">Téléphone :</label>
      <input
        id="phone"
        type="number"
        formControlName="phone"
        placeholder="01.60.68.98.74"
        class="text-gray-400 w-full h-12 border border-gray-600 bg-white px-2 py-1 text-sm rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
      />
    </div>
    <!-- Email -->
    <div
      class="flex w-full flex-col justify-center items-start gap-2 flex-nowrap"
    >
      <label for="email">Email :</label>
      <input
        id="entreprise"
        type="email"
        formControlName="email"
        placeholder="monannonce@gmail.com"
        class="text-gray-400 w-full h-12 border border-gray-600 bg-white px-2 py-1 text-sm rounded-xl focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
      />
    </div>
  </fieldset>`,
})
export class EntrepriseFormComponent {
  entrepriseForm: InputSignal<FormGroup<EntrepriseForm>> = input.required();
}
