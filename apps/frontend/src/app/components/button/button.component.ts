import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fdw-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<button
    class="flex justify-center items-center text-3xl lg:text-6xl
  text-JobTracker-gray bg-JobTracker-side rounded-full
   w-9 h-9 lg:w-18 lg:h-18 cursor-pointer
  hover:bg-JobTracker-side-hover fixed bottom-8 right-2 md:right-5"
  >
    <p class="mb-0.5 lg:mb-1.5">+</p>
  </button>`,
})
export class ButtonComponent {}
