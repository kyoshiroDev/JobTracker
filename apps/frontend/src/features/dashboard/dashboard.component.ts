import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HerosSection } from './components/heros-section';
import { StatsCards } from './components/stats-cards/stats-cards';
import { CandidaturesRecentes } from './components/candidatures-recentes/candidatures-recentes';

@Component({
  selector: 'fdw-dashboard',
  imports: [HerosSection, StatsCards, CandidaturesRecentes],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-col gap-8 px-4 md:px-20 xl:px-60 h-screen' },
  template: `
      <fdw-heros-section />
      <fdw-stats-cards />
      <div class="flex gap-8">
        <fdw-candidatures-recentes />
      </div>
  `,
})
export class DashboardComponent {}
