import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fdw-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<button
    class="flex justify-center items-center text-5xl md:text-7xl
  text-JobTracker-gray bg-JobTracker-side rounded-full
  p-5 w-16 h-16 md:w-20 md:h-20 cursor-pointer
  hover:bg-JobTracker-side-hover fixed bottom-8 right-5"
  >
    +
  </button>`,
})
export class ButtonComponent {}
