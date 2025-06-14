import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fdw-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<button
    class="flex justify-center items-center text-5xl md:text-7xl
  text-JobTracker-gray bg-JobTracker-side rounded-full
   w-12 h-12 md:w-20 md:h-20 cursor-pointer
  hover:bg-JobTracker-side-hover fixed bottom-8 right-2 md:right-5"
  >
    <p class="mb-1.5">+</p>
  </button>`,
})
export class ButtonComponent {}
