import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fdw-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<button
    class="flex justify-center items-center
  text-JobTracker-gray bg-JobTracker-side rounded-full
   w-12 h-12 cursor-pointer
  hover:bg-JobTracker-side-hover fixed bottom-8 right-2 md:right-5"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
    </svg>
  </button>`,
})
export class ButtonComponent {}
