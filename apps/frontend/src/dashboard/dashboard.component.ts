import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HerosSection } from './components/heros-section';
import { StatsCards } from './components/stats-cards/stats-cards';

@Component({
  selector: 'fdw-dashboard',
  imports: [HerosSection, StatsCards],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="flex flex-col gap-8">
      <fdw-heros-section />
      <fdw-stats-cards />
    </section>
  `,
})
export class DashboardComponent {}
