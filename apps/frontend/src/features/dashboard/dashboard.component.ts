import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HerosSection } from './components/heros-section';
import { StatsCards } from './components/stats-cards/stats-cards';
import { CandidaturesList } from '../candidatures/candidatures-list';

@Component({
  selector: 'fdw-dashboard',
  imports: [HerosSection, StatsCards, CandidaturesList],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-col gap-8 px-4 md:px-60 h-screen' },
  template: `
      <fdw-heros-section />
      <fdw-stats-cards />
      <div class="flex gap-8">
        <fdw-candidatures-list />
      </div>
  `,
})
export class DashboardComponent {}
