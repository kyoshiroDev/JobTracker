import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { Annonce } from '../annonce';
import { STATUS_COLOR } from '../../app/tokens/status-color-token';

@Component({
  selector: 'fdw-annonce-detail-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div
      class="flex justify-between items-center px-12 py-4 bg-JobTracker-gray"
    >
      <div class="text-sm text-gray-500">
        Publiée le {{ annonce().createdAt | date : 'dd/MM/yyyy' }}
      </div>
      <span
        class="px-6 py-3 text-sm text-JobTracker-white font-semibold rounded-full"
        [class]="statusColorClass(this.annonce().content.status)"
      >
        {{ annonce().content.status }}
      </span>
    </div>
    <div class="flex justify-center p-4 bg-JobTracker-gray">
      <a
        [href]="annonce().content.annonceLink"
        target="_blank"
        class="w-[250px] px-5 py-2 bg-JobTracker-side hover:bg-JobTracker-side-hover text-white font-medium rounded-md transition-colors duration-200 text-center items-center"
      >
        Postuler
      </a>
    </div>
  `,
})
export class AnnonceDetailFooterComponent {
  readonly status = inject(STATUS_COLOR);
  readonly annonce = input.required<Annonce>();

  protected statusColorClass(status: string): string {
    const statusConfig = this.status.find((item) => item.label === status);
    return statusConfig?.colorClassBg || 'text-JobTracker-blue';
  }
}
