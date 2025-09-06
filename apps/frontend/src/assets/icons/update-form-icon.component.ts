import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fdw-update-form-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg class="cursor-pointer w-4 h-4 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      stroke-width="1"
      fill="currentColor"
      d="m21.558 3.592l-1.15-1.15a1.49 1.49 0 0 0-2.12 0L13 7.731V11h3.27l5.288-5.288a1.49 1.49 0 0 0 0-2.12M15.579 9.45h-1.03V8.42L18 4.973l1.03 1.03Z"
    />
    <path
      stroke-width="1"
      fill="currentColor"
      d="M19 19H5V5h6V3H5a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2v-6h-2Z"
    />
  </svg>`,
})
export class UpdateFormIconComponent {}
