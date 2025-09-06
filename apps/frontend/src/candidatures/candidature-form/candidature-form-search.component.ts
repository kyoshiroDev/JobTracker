import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { STATUS_COLOR } from '../../app/tokens/status-color-token';
import { Candidature } from '../candidature';
import { CandidaturesService } from '../candidatures.service';
import { InputCandidatureFormSearchComponent } from './components/input-candidature-form-search.component';

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
  selector: 'fdw-candidatures-form-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, InputCandidatureFormSearchComponent],
  template: `
    <div class="flex flex-col gap-4 w-full md:w-fit m-auto px-2 pt-4">
      <fdw-input-candidatures-form-search class="w-full lg:hidden" />
      <form
        [formGroup]="selectedAnnonceForm"
        class="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 bg-white p-2 rounded-lg shadow-md mt-4 md:mt-0"
      >
        <fieldset class="grid grid-cols-1 xl:grid-cols-2 gap-2 max-w-content" formGroupName="company">
          <select
            (change)="onChange()"
            aria-label="name"
            formControlName="name"
            class="form-select w-full sm:max-w-full md:text-left"
          >
            <option value="" selected>Choisir une entreprise</option>
            @if (annonces().length > 0) { @for (annonce of annonces(); track annonce.id) {
            <option [value]="annonce.company.name">
              {{ annonce.company.name }}
            </option>
            } }
          </select>
          <select
            (change)="onChange()"
            aria-label="city"
            formControlName="city"
            class="form-select w-full sm:max-w-full md:text-left"
          >
            <option value="" selected>Choisir une localisation</option>
            @if (annonces().length > 0) { @for (annonce of annonces(); track annonce.id) {
            <option [value]="annonce.company.city">
              {{ annonce.company.city }}
            </option>
            } }
          </select>
        </fieldset>
        <fieldset class="grid grid-cols-1 xl:grid-cols-2 gap-2 max-w-content" formGroupName="content">
          <select
            (change)="onChange()"
            aria-label="salaire"
            formControlName="salary"
            class="form-select w-full sm:max-w-full md:text-left"
          >
            <option value="" selected>Choisir un revenu</option>
            @if (annonces().length > 0) { @for (annonce of annonces(); track annonce.id) {
            <option [value]="annonce.content.salary">{{ annonce.content.salary }} €</option>
            } }
          </select>
          <select
            (change)="onChange()"
            aria-label="status"
            formControlName="status"
            class="form-select w-full sm:max-w-full md:text-left"
          >
            <option value="" selected>Choisir un statut</option>
            @for (status of statusList; track status.label) {
            <option [value]="status.label">{{ status.label }}</option>
            }
          </select>
        </fieldset>
      </form>
    </div>
  `,
})
export class CandidatureFormSearchComponent {
  protected readonly statusList = inject(STATUS_COLOR);
  private readonly fb = inject(FormBuilder);
  private readonly serviceAnnonce = inject(CandidaturesService);

  readonly annonces = input.required<Candidature[]>();

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
