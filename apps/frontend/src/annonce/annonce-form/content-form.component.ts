import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContentForm } from './annonceForm';

@Component({
  selector: 'fdw-content-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: `
    <fieldset
      class="flex flex-col gap-5 border border-JobTracker-blue p-5 rounded-md"
    >
      <legend
        class="text-center font-semibold text-2xl px-2 text-JobTracker-blue"
      >
        Contenu de l'annonce
      </legend>
    <div
      [formGroup]="contentForm()"
      class="flex flex-col gap-5"
    >
      <!-- à propos -->
      <div
        class="flex flex-col w-full justify-center items-start gap-2 flex-nowrap"
      >
        <label class="text-gray-800" for="about">À propos :</label>
        <textarea
          id="about"
          rows="2"
          placeholder="Saisissez vôtre texte ici ..."
          formControlName="about"
        >
        </textarea>
      </div>
      <!-- Descriptif -->
      <div
        class="flex flex-col w-full justify-center items-start gap-2 flex-nowrap"
      >
        <label for="descriptif">Descriptif :</label>
        <textarea
          id="descriptif"
          rows="2"
          placeholder="Saisissez vôtre texte ici ..."
          formControlName="descriptif"
        >
        </textarea>
      </div>
      <!-- Competence -->
      <div
        class="flex flex-col w-full justify-center items-start gap-2 flex-nowrap"
      >
        <label for="competence">Compétences :</label>
        <textarea
          id="competence"
          rows="2"
          placeholder="Saisissez vôtre texte ici ..."
          formControlName="competence"
        >
        </textarea>
      </div>
      <!-- Avantage -->
      <div
        class="flex flex-col w-full justify-center items-start gap-2 flex-nowrap"
      >
        <label for="avantage">Avantages :</label>
        <textarea
          id="avantage"
          rows="2"
          placeholder="Saisissez vôtre texte ici ..."
          formControlName="avantage"
        >
        </textarea>
      </div>
      <div class="flex flex-wrap justify-start items-center gap-5">
        <!-- Salaire -->
        <div class="flex items-center justify-center gap-2">
          <label class="min-w-fit" for="salaire">Salaire :</label>
          <input
            id="salaire"
            type="text"
            placeholder="10000"
            formControlName="salaire"
            class="max-w-[80px] text-center border border-gray-600 bg-white py-1 text-sm text-gray-400 rounded-md focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
          />
          <p>annuelle</p>
        </div>
        <div class="flex flex-wrap gap-5 justify-start items-center w-full">
        <!-- Contrat -->
        <div class="flex items-center justify-start gap-2">
          <label class="min-w-fit" for="typeContrat">Contrat :</label>
          <select
            id="typeContrat"
            formControlName="typeContrat"
            class="border border-gray-600 text-gray-900 bg-white p-2 text-sm rounded-md focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
          >
            <option value="null" hidden>type de contrat</option>
            <option value="CDI">contrat en CDI</option>
            <option value="CDD">contrat en CDD</option>
            <option value="Freelance">contrat en Freelance</option>
            <option value="Stage">contrat en Stage</option>
          </select>
        </div>
        <!-- Mode de travail -->
        <div class="flex items-center justify-start gap-2">
          <label class="min-w-fit" for="modeTravail">Présence :</label>
          <select
            id="modeTravail"
            formControlName="modeTravail"
            class="border border-gray-600 bg-white p-2 text-sm text-gray-900 rounded-md focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
          >
            <option value="null" hidden>mode de travail</option>
            <option value="fullremote">Full remote</option>
            <option value="presentiel">Présentiel</option>
            <option value="hybride">Hybride</option>
          </select>
        </div>
      </div>
      </div>
      <!-- AnnonceLink-->
      <div class="flex w-full justify-left items-center gap-2 flex-wrap">
        <label for="annonceLink">Lien de l'annonce :</label>
        <input
          id="annonceLink"
          type="text"
          placeholder="https://www.google.com"
          formControlName="annonceLink"
          class="flex-1/2 border border-gray-600 bg-white px-2 py-1 text-sm text-gray-400 rounded-md focus:border-JobTracker-blue focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
        />
      </div>
    </div>
    </fieldset>
  `,
})
export class ContentFormComponent {
  contentForm: InputSignal<FormGroup<ContentForm>> = input.required();
}
