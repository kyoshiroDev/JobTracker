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
    @if (annonce().content.status === "À relancer"){
    <div class="flex justify-center px-4 pt-4 bg-JobTracker-white">
      <a
        [href]="annonce().content.annonceLink"
        target="_blank"
        class="w-[250px] px-5 py-2 bg-JobTracker-side hover:bg-JobTracker-side-hover text-white font-medium rounded-md transition-colors duration-200 text-center items-center"
      >
        Relancer
      </a>
    </div>
    }
  `,
})
export class AnnonceDetailFooterComponent {

  readonly annonce = input.required<Annonce>();


}
