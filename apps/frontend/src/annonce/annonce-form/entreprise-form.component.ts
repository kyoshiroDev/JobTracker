import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CompanyForm } from './annonceForm';

@Component({
  selector: 'fdw-entreprise-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: ` <fieldset
    [formGroup]="entrepriseForm()"
    class="flex flex-col gap-5 border border-JobTracker-blue p-5 rounded-md"
  >
    <legend
      class="text-center font-semibold text-xl md:text-2xl px-2 text-JobTracker-blue"
    >
      Entreprise
    </legend>
    <!-- Name -->
    <div
      class="flex w-full flex-col justify-center items-start gap-2 flex-nowrap"
    >
      <label for="name">Nom<span class="text-xs text-red-700">*</span></label>
      <input
        id="name"
        type="text"
        formControlName="name"
        placeholder="Google"
        class="form-input w-full"
      />
    </div>
    <!-- Ville -->
    <div
      class="flex w-full flex-col justify-center items-start gap-2 flex-nowrap"
    >
      <label for="city">Ville<span class="text-xs text-red-700">*</span></label>
      <input id="city" type="text" formControlName="city" placeholder="Paris" class="form-input w-full"/>
    </div>
    <!-- Phone -->
    <div
      class="flex w-full flex-col justify-center items-start gap-2 flex-nowrap"
    >
      <label for="phone"
        >Téléphone<span class="text-xs text-red-700">*</span></label
      >
      <input
        id="phone"
        type="number"
        formControlName="phone"
        placeholder="01.60.68.98.74"
        class="form-input w-full"
      />
    </div>
    <!-- Email -->
    <div
      class="flex w-full flex-col justify-center items-start gap-2 flex-nowrap"
    >
      <label for="email"
        >Email<span class="text-xs text-red-700">*</span></label
      >
      <input
        id="entreprise"
        type="email"
        formControlName="email"
        placeholder="monannonce@gmail.com"
        class="form-input w-full"
      />
    </div>
  </fieldset>`,
})
export class EntrepriseFormComponent {
  entrepriseForm: InputSignal<FormGroup<CompanyForm>> = input.required();
}
