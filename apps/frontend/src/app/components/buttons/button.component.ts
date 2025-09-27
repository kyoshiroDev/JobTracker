import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fdw-buttons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<button
    aria-label="Ajouter une annonce"
    class="flex justify-center items-center
  text-JobTracker-white bg-JobTracker-side rounded-full
   w-12 h-12 cursor-pointer
  hover:bg-JobTracker-side-hover fixed bottom-8 right-6"
  >
    <svg class="size-6"><use href="assets/icons/sprite.svg#i-cross"></use></svg>
  </button>`,
})
export class ButtonComponent {}
