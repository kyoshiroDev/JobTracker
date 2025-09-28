import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fdw-button-new-candidature',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <button
    class="inline-flex flex-nowrap gap-2 justify-center items-center text-sm bg-gradient-primary text-primary-foreground font-medium min-w-fit px-2 h-10 rounded-lg cursor-pointer"
  >
    <svg class="hidden md:block size-6">
      <use href="assets/icons/sprite.svg#i-cross"></use>
    </svg>
    Nouvelle Candidature
  </button>`,
})
export class ButtonNewCandidatureComponent {}
