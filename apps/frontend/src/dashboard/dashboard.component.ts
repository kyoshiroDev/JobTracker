import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HerosSection } from '../app/components/heros-section';

@Component({
  selector: 'fdw-dashboard',
  imports: [HerosSection],
  template: `
    <fdw-heros-section />
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
