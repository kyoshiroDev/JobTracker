import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
  signal,
} from '@angular/core';
import { InputAnnonceFormSearchComponent } from '../../../annonce/annonce-form/components/input-annonce-form-search.component';
import { AnnoncesService } from '../../../annonce/annonces.service';

@Component({
  selector: 'fdw-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, InputAnnonceFormSearchComponent],
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
      <div class="hidden md:flex justify-center items-center gap-4 flex-1">
        <fdw-input-annonce-form-search class="w-full" />
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
  protected readonly serviceAnnonce = inject(AnnoncesService);

  readonly name = signal<string>('Peter Parker');

  readonly openSideBar = output();
  readonly closeSideBar = output();
}
