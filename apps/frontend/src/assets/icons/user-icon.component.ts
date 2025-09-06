import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fdw-user-icon',
  template: ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
    />
  </svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserIconComponent {}
