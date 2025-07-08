import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { STATUS_COLOR } from '../../app/tokens/status-color-token';
import { Annonce } from '../annonce';
import { AnnonceForm, ContentForm, EntrepriseForm } from './annonceForm';

@Component({
  selector: 'fdw-annonce-form-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="px-2 lg:px-0 max-w-3xl m-auto">
      <form
        (change)="formValue.emit(this.researchForm.value)"
        [formGroup]="researchForm"
        class="bg-white p-4 rounded-lg shadow-md flex flex-col container justify-start gap-4 mt-5 m-auto"
      >
        <p
          class="w-full text-center not-first:text-2xl text-JobTracker-blue font-semibold"
        >
          RECHERCHER
        </p>
        <div class="flex justify-center gap-3 w-full">
          <input
            aria-label="poste"
            type="text"
            formControlName="poste"
            placeholder="Mot-clé..."
            class="w-full"
          />
          <button
            (click)="resetForm.emit(this.researchForm.reset())"
            type="button"
            class="flex justify-center items-center cursor-pointer h-8 w-8 bg-JobTracker-side rounded-lg hover:bg-JobTracker-side-hover"
          >
            <svg
              class="text-JobTracker-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 21 21"
              role="button"
              aria-label="bouton pour reset le formulaire"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6.5 3.5c-2.414 1.377-4 4.022-4 7a8 8 0 1 0 8-8" />
                <path d="M6.5 7.5v-4h-4" />
              </g>
            </svg>
          </button>
        </div>
        <div
          class="flex sm:flex-row flex-col justify-center items-center gap-3 w-full"
        >
          <fieldset
            class="flex sm:flex-row flex-col justify-center gap-3 w-full md:w-1/2"
            formGroupName="entreprise"
          >
            <select
              aria-label="name"
              formControlName="name"
              class="w-full md:w-1/2 min-w-fit text-center md:text-left"
            >
              <option value="null" selected>Choisir une entreprise</option>
              @if(annonces().length > 0) { @for (annonce of annonces(); track
              annonce.id) {
              <option [value]="annonce.entreprise.name">
                {{ annonce.entreprise.name }}
              </option>
              } }
            </select>
            <select
              aria-label="ville"
              formControlName="ville"
              class="w-full md:w-1/2 min-w-fit text-center md:text-left"
            >
              <option value="null" selected>Choisir une localisation</option>
              @if(annonces().length > 0) { @for (annonce of annonces(); track
              annonce.id) {
              <option [value]="annonce.entreprise.ville">
                {{ annonce.entreprise.ville }}
              </option>
              } }
            </select>
          </fieldset>
          <fieldset
            formGroupName="content"
            class="flex sm:flex-row flex-col justify-start w-full md:w-1/2 gap-3"
          >
            <select
              aria-label="salaire"
              formControlName="salaire"
              class="w-full md:w-1/2 min-w-fit text-center md:text-left"
            >
              <option value="null" selected>Choisir un revenu</option>
              @if(annonces().length > 0) { @for (annonce of annonces(); track
              annonce.id) {
              <option [value]="annonce.content.salaire">
                {{ annonce.content.salaire }} €
              </option>
              } }
            </select>
            <select
              aria-label="status"
              formControlName="status"
              class="w-full md:w-1/2 min-w-fit text-center md:text-left"
            >
              <option value="null" selected>Choisir un statut</option>
              @for (status of statusList; track status.label) {
              <option [value]="status.label">{{ status.label }}</option>
              }
            </select>
          </fieldset>
        </div>
      </form>
    </div>
  `,
})
export class AnnonceFormSearchComponent {
  readonly statusList = inject(STATUS_COLOR);

  readonly annonces = input.required<Annonce[]>();
  readonly formValue =
    output<AnnonceFormSearchComponent['researchForm']['value']>();
  readonly resetForm = output();

  researchForm = new FormGroup<
    Pick<AnnonceForm, 'poste'> & {
      entreprise: FormGroup<Pick<EntrepriseForm, 'name' | 'ville'>>;
      content: FormGroup<Pick<ContentForm, 'salaire' | 'status'>>;
    }
  >({
    poste: new FormControl(null),
    entreprise: new FormGroup<Pick<EntrepriseForm, 'name' | 'ville'>>({
      name: new FormControl(null),
      ville: new FormControl(null),
    }),
    content: new FormGroup<Pick<ContentForm, 'salaire' | 'status'>>({
      salaire: new FormControl(null),
      status: new FormControl(null),
    }),
  });
}
