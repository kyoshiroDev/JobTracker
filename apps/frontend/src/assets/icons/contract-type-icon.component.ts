import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fdw-contract-type-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    />
  </svg>`,
})
export class ContractTypeIconComponent {}
