import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fdw-button-new-candidature',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <button
    class="flex flex-nowrap justify-center items-center gap-4 max-w-fit pl-4 pr-6 w-fit h-10 rounded-lg cursor-pointer"
  >
    <svg class="size-6 mb-0.5">
      <use href="assets/icons/sprite.svg#i-cross"></use>
    </svg>
    Nouvelle Candidature
  </button>`,
})
export class ButtonNewCandidatureComponent {}
