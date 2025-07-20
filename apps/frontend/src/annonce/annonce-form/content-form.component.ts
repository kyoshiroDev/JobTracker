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
        class="text-center font-semibold text-xl md:text-2xl px-2 text-JobTracker-blue"
      >
        Contenu de l'annonce
      </legend>
      <div [formGroup]="contentForm()" class="flex flex-col gap-5">
        <!-- à propos -->
        <div
          class="flex flex-col w-full justify-center items-start gap-2 flex-nowrap"
        >
          <label for="about"
            >À propos<span class="text-xs text-red-700">*</span></label
          >
          <textarea
            id="about"
            rows="2"
            placeholder="Saisissez vôtre texte ici ..."
            formControlName="about"
          >
          </textarea>
        </div>
        <!-- Description -->
        <div
          class="flex flex-col w-full justify-center items-start gap-2 flex-nowrap"
        >
          <label for="description"
            >Descriptif<span class="text-xs text-red-700">*</span></label
          >
          <textarea
            id="description"
            rows="2"
            placeholder="Saisissez vôtre texte ici ..."
            formControlName="description"
          >
          </textarea>
        </div>
        <!-- Skills -->
        <div
          class="flex flex-col w-full justify-center items-start gap-2 flex-nowrap"
        >
          <label for="skills"
            >Compétences<span class="text-xs text-red-700">*</span></label
          >
          <textarea
            id="skills"
            rows="2"
            placeholder="Saisissez vôtre texte ici ..."
            formControlName="skills"
          >
          </textarea>
        </div>
        <!-- Benefits -->
        <div
          class="flex flex-col w-full justify-center items-start gap-2 flex-nowrap"
        >
          <label for="benefits"
            >Avantages<span class="text-xs text-red-700">*</span></label
          >
          <textarea
            id="benefits"
            rows="2"
            placeholder="Saisissez vôtre texte ici ..."
            formControlName="benefits"
          >
          </textarea>
        </div>
        <div class="flex flex-wrap justify-start items-center gap-5">
          <!-- Salary -->
          <div class="flex items-center justify-center gap-2">
            <label class="min-w-fit" for="salary"
              >Salaire<span class="text-xs text-red-700">*</span></label
            >
            <input
              id="salary"
              type="text"
              placeholder="10000"
              formControlName="salary"
            />
            <p>annuelle</p>
          </div>
          <div class="flex flex-wrap gap-5 justify-start items-center w-full">
            <!-- Contrat -->
            <div
              class="flex items-center justify-start gap-2 text-xs md:text-sm"
            >
              <label class="min-w-fit" for="contractType"
                >Contrat<span class="text-xs text-red-700">*</span></label
              >
              <select id="contractType" formControlName="contractType">
                <option value="null" hidden>type de contrat</option>
                <option value="CDI">contrat en CDI</option>
                <option value="CDD">contrat en CDD</option>
                <option value="Freelance">contrat en Freelance</option>
                <option value="Stage">contrat en Stage</option>
              </select>
            </div>
            <!-- Mode de travail -->
            <div
              class="flex items-center justify-start gap-2 text-xs md:text-sm"
            >
              <label class="min-w-fit" for="workMode"
                >Présence<span class="text-xs text-red-700">*</span></label
              >
              <select id="workMode" formControlName="workMode" class="p-2">
                <option value="null" hidden>mode de travail</option>
                <option value="fullremote">Full remote</option>
                <option value="presentiel">Présentiel</option>
                <option value="hybride">Hybride</option>
              </select>
            </div>
          </div>
        </div>
        <!-- AnnonceLink-->
        <div
          class="flex flex-col w-full justify-left items-start gap-2 flex-wrap"
        >
          <label for="annonceLink"
            >Lien de l'annonce<span class="text-xs text-red-700">*</span></label
          >
          <input
            id="annonceLink"
            type="text"
            placeholder="https://www.google.com"
            formControlName="annonceLink"
          />
        </div>
      </div>
    </fieldset>
  `,
})
export class ContentFormComponent {
  contentForm: InputSignal<FormGroup<ContentForm>> = input.required();
}
