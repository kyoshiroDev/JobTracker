import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { STATUS_COLOR } from '../../app/tokens/status-color-token';
import { Annonce } from '../annonce';
import { AnnoncesService } from '../annonces.service';
import { InputAnnonceFormSearchComponent } from './components/input-annonce-form-search.component';

type ResearchFormType = {
  company: FormGroup<{
    name: FormControl<string | null>;
    city: FormControl<string | null>;
  }>;
  content: FormGroup<{
    salary: FormControl<string | null>;
    status: FormControl<string | null>;
  }>;
};

@Component({
  selector: 'fdw-annonce-form-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, InputAnnonceFormSearchComponent],
  template: `
    <div class="px-2 lg:px-0 max-w-3xl m-auto">
      <div class="pt-4 flex md:hidden justify-center items-center gap-4 flex-1">
        <fdw-input-annonce-form-search class="w-full" />
      </div>
      <form
        [formGroup]="selectedAnnonceForm"
        class="bg-white p-4 rounded-lg shadow-md flex flex-col container justify-start gap-4 mt-5 m-auto"
      >
        <div
          class="flex sm:flex-row flex-col justify-center items-center gap-3 w-full"
        >
          <fieldset
            class="flex sm:flex-row flex-col justify-center gap-3 w-full md:w-1/2"
            formGroupName="company"
          >
            <select
              (change)="onChange()"
              aria-label="name"
              formControlName="name"
              class="w-full md:w-1/2 min-w-fit text-center md:text-left"
            >
              <option value="" selected>Choisir une entreprise</option>
              @if (annonces().length > 0) { @for (annonce of annonces(); track
              annonce.id) {
              <option [value]="annonce.company.name">
                {{ annonce.company.name }}
              </option>
              } }
            </select>
            <select
              (change)="onChange()"
              aria-label="city"
              formControlName="city"
              class="w-full md:w-1/2 min-w-fit text-center md:text-left"
            >
              <option value="" selected>Choisir une localisation</option>
              @if (annonces().length > 0) { @for (annonce of annonces(); track
              annonce.id) {
              <option [value]="annonce.company.city">
                {{ annonce.company.city }}
              </option>
              } }
            </select>
          </fieldset>
          <fieldset
            formGroupName="content"
            class="flex sm:flex-row flex-col justify-start w-full md:w-1/2 gap-3"
          >
            <select
              (change)="onChange()"
              aria-label="salaire"
              formControlName="salary"
              class="w-full md:w-1/2 min-w-fit text-center md:text-left"
            >
              <option value="" selected>Choisir un revenu</option>
              @if (annonces().length > 0) { @for (annonce of annonces(); track
              annonce.id) {
              <option [value]="annonce.content.salary">
                {{ annonce.content.salary }} €
              </option>
              } }
            </select>
            <select
              (change)="onChange()"
              aria-label="status"
              formControlName="status"
              class="w-full md:w-1/2 min-w-fit text-center md:text-left"
            >
              <option value="" selected>Choisir un statut</option>
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
  protected readonly statusList = inject(STATUS_COLOR);
  private readonly fb = inject(FormBuilder);
  private readonly serviceAnnonce = inject(AnnoncesService);

  readonly annonces = input.required<Annonce[]>();

  selectedAnnonceForm = this.fb.group<ResearchFormType>({
    company: this.fb.group({
      name: this.fb.control<string | null>(''),
      city: this.fb.control<string | null>(''),
    }),
    content: this.fb.group({
      salary: this.fb.control<string | null>(''),
      status: this.fb.control<string | null>(''),
    }),
  });

  onChange() {
    const formDataFilters = {
      salary: this.selectedAnnonceForm.controls.content.controls.salary.value,
      status: this.selectedAnnonceForm.controls.content.controls.status.value,
      name: this.selectedAnnonceForm.controls.company.controls.name.value,
      city: this.selectedAnnonceForm.controls.company.controls.city.value,
    };
    this.serviceAnnonce.updateFilters(formDataFilters);
  }
}
