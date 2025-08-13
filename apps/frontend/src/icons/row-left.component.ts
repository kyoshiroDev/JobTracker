import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'fdw-return-row-svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink],
  template: `
    <svg
      routerLink="/annonces"
      class="cursor-pointer w-4 h-4 md:w-8 md:h-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        stroke-width="1"
        fill="currentColor"
        d="m5.83 9l5.58-5.58L10 2l-8 8l8 8l1.41-1.41L5.83 11H18V9z"
      />
    </svg>`,
})
export class RowLeftComponent {}
