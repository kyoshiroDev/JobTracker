import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
  signal,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AnnoncesService } from '../../../annonce/annonces.service';

type InputSearch = {
  job: FormControl<string | null>;
};

@Component({
  selector: 'fdw-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, FormsModule, ReactiveFormsModule],
  template: `
    <header
      class="flex
      h-20
  md:h-30
  bg-JobTracker-blue
  text-JobTracker-white
  justify-between
  items-center"
    >
      <div
        class="flex justify-start items-center gap-2 md:gap-4 pl-2 md:px-4 w-fit"
      >
        <img
          ngSrc="/avatar.webp"
          alt="Avatar"
          class="w-8 h-8 md:w-12 md:h-12 rounded-full aspect-square max-w-fit"
          width="80"
          height="80"
          priority
        />
        <h2 class="lg:px-2 text-sm md:text-xl">Hello {{ name() }}</h2>
      </div>
      <div class="flex justify-center items-center gap-4 flex-1">
        <form
          class="flex w-3/4 justify-center items-center bg-JobTracker-white p-2 rounded-md shadow-sm"
          [formGroup]="inputSearchAnnonce"
        >
          <input
            (change)="onChange()"
            aria-label="job"
            type="text"
            formControlName="job"
            placeholder="Rechercher ..."
            class="w-full"
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
        </form>
      </div>
      <div
        class="hidden lg:flex justify-end items-center gap-5 px-8 w-fit cursor-pointer"
      >
        <button
          class="bg-JobTracker-white text-JobTracker-blue px-4 py-2 rounded-xl font-semibold hover:text-JobTracker-side-hover cursor-pointer"
        >
          Déconnexion
        </button>
      </div>
      <div
        (click)="openSideBar.emit()"
        class="cursor-pointer flex flex-col justify-around min-w-6 min-h-6 md:min-w-8 md:min-h-8 right-0 mx-4 lg:hidden"
      >
        <span
          class="h-0.5 md:h-1 w-full bg-JobTracker-white rounded-full"
        ></span>
        <span
          class="h-0.5 md:h-1 w-full bg-JobTracker-white rounded-full"
        ></span>
        <span
          class="h-0.5 md:h-1 w-full bg-JobTracker-white rounded-full"
        ></span>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  protected readonly fb = inject(FormBuilder);
  protected readonly serviceAnnonce = inject(AnnoncesService);

  readonly name = signal<string>('Peter Parker');

  readonly openSideBar = output();
  readonly closeSideBar = output();

  protected readonly inputSearchAnnonce = this.fb.group<InputSearch>({
    job: this.fb.control<string | null>(null),
  });

  onChange() {
    const formDataFilters = this.inputSearchAnnonce.getRawValue();
    this.serviceAnnonce.updateFilters(formDataFilters)
  }
}
