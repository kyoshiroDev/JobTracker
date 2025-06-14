import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnoncesService } from '../annonce/annonces.service';
import { STATUS_COLOR } from '../app/tokens/status-color-token';

@Component({
  selector: 'fdw-suivi-candidatures',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div class="flex justify-center gap-10 h-[90px] w-full px-4">
      @for(status of statusConfigs; track status.label){
      <div
        class="flex flex-col
  bg-JobTracker-white
  font-semibold
  w-full
  max-w-[300px]
  justify-center
  items-center
  gap-2
  rounded-2xl
  drop-shadow-lg"
      >
        <h3 class="text-3xl">{{ status.label }}</h3>
        <p class="text-2xl" [class]="status.colorClassText">
          {{ annoncesServices.countByStatus().get(status.label) }}
        </p>
      </div>
      }
    </div>
  `,
})
export class SuiviCandidaturesComponent {
  protected readonly annoncesServices = inject(AnnoncesService);

  protected readonly statusConfigs = inject(STATUS_COLOR);
}
