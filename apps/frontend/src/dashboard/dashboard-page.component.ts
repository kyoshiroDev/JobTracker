import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CandidaturesRecentesComponent } from './candidatures-recentes.component';
import { SuiviCandidaturesComponent } from './suivi-candidatures.component';
//import { TacheAFaireComponent } from './widgets/tache-a-faire/tache-a-faire.component';
import { ButtonComponent } from '../app/components/button/button.component';

@Component({
  selector: 'fdw-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SuiviCandidaturesComponent,
    CandidaturesRecentesComponent,
    //TacheAFaireComponent,
  ],
  template: `
    <div
      class="py-6 lg:p-6 flex flex-col justify-start gap-15 max-w-dvw h-full"
    >
      <fdw-suivi-candidatures class="hidden lg:flex lg:justify-center" />
      <fdw-candidatures-recentes />
      <!-- <fdw-tache-a-faire /> -->
    </div>
  `,
})
export class DashboardComponent {}
