import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'fdw-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, NgOptimizedImage],
  host: {
    class: 'inline-flex min-w-full h-20 bg-background/80',
  },
  template: `
    <header class="inline-flex justify-between items-center px-4 flex-nowrap border-b border-solid w-full">
      <div class="flex gap-10 items-center">
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
          class="bg-muted/50 border-muted focus:bg-background transition-smooth w-[450px] h-8 p-4 rounded-md input placeholder:text-muted-foreground"
        />
      </div>
      <div class="inline-flex py-4 justify-center items-center gap-8 px-4">
        <button
          class="inline-flex flex-nowrap gap-2 justify-center items-center bg-gradient-primary text-primary-foreground font-medium h-10 w-fit p-4 rounded-lg"
        >
          <svg class="size-6">
            <use href="assets/icons/sprite.svg#i-cross"></use>
          </svg>
          Nouvelle candidature
        </button>
        <span>
          <img class="rounded-full h-14 w-14" ngSrc="/avatar.webp" alt="" height="80" width="80" />
        </span>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  sidebar = output()
  protected readonly search = new FormControl('');
}
