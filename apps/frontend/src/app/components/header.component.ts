import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { ButtonNewCandidatureComponent } from './button-new-candidature.component';

@Component({
  selector: 'fdw-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, NgOptimizedImage, ButtonNewCandidatureComponent],
  host: {
    class: 'inline-flex min-w-full md:h-20 bg-background/80',
  },
  template: `
    <header class="inline-flex justify-between items-center px-0 md:px-4 border-b border-solid w-full">
      <div class="relative px-4 md:px-0 flex gap-2 md:gap-10 items-center">
        <button class="cursor-pointer" (click)="sidebar.emit()">
          <svg class="size-5">
            <use class="text-foreground" href="assets/icons/sprite.svg#i-layout-sidebar"></use>
          </svg>
        </button>
        <label for="search"></label>
        <input
          type="text"
          [formControl]="search"
          id="search"
          placeholder="Rechercher une candidature, entreprise..."
          autocomplete="on"
          class="bg-muted/50 border-muted focus:bg-background transition-smooth md:w-[450px] h-8 p-4 rounded-md input placeholder:text-muted-foreground"
        />
      </div>
      <div class="inline-flex py-4 justify-center items-center gap-4 md:gap-8 px-4 md:px-4">
        <fdw-button-new-candidature class="hidden md:inline-flex flex-nowrap gap-2 justify-center items-center bg-gradient-primary text-primary-foreground font-medium px-2 h-10 rounded-lg cursor-pointer"/>
        <span>
          <img class="rounded-full h-14 w-14" ngSrc="/avatar.webp" alt="" height="80" width="80" />
        </span>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  sidebar = output();
  protected readonly search = new FormControl('');
}
