import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fdw-row-right',
  imports: [CommonModule],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowRightComponent {}
