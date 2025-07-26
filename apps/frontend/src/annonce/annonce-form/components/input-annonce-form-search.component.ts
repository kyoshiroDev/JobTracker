import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AnnoncesService } from '../../annonces.service';

type InputSearch = {
  job: FormControl<string | null>;
};

@Component({
  selector: 'fdw-input-annonce-form-search',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: ` <form
    class="flex w-full md:w-3/4 justify-center items-center bg-JobTracker-white  p-2 rounded-md shadow-sm m-auto"
    [formGroup]="inputSearchAnnonce"
  >
    <input
      (change)="onChange()"
      aria-label="job"
      type="text"
      formControlName="job"
      placeholder="Rechercher ..."
      class="form-input text-black"
    />
    <div class="px-2 text-JobTracker-blue">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 font-semibold"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          stroke-width="10"
          d="m228.24 219.76l-51.38-51.38a86.15 86.15 0 1 0-8.48 8.48l51.38 51.38a6 6 0 0 0 8.48-8.48M38 112a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74"
        />
      </svg>
    </div>
  </form>`,
})
export class InputAnnonceFormSearchComponent {
  protected readonly fb = inject(FormBuilder);
  protected readonly serviceAnnonce = inject(AnnoncesService);

  protected readonly inputSearchAnnonce = this.fb.group<InputSearch>({
    job: this.fb.control<string | null>(null),
  });

  onChange() {
    const formDataFilters = this.inputSearchAnnonce.getRawValue();
    this.serviceAnnonce.updateFilters(formDataFilters);
  }
}
