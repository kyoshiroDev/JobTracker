import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
  Signal,
} from '@angular/core';
import { Annonce } from '../annonce';
import { STATUS_COLOR } from '../../app/tokens/status-color-token';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'fdw-annonce-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <a
      [routerLink]="['/annonce', annonce().id]"
      class="flex flex-col items-center xl:flex-row min-h-[152px] xl:text-left gap-1 bg-JobTracker-white rounded-md p-4 shadow-md cursor-pointer hover:scale-102 transition-transform duration-500 ease-in-out"
    >
      <div
        class="w-[100px] flex flex-col justify-center text-2xl text-JobTracker-blue font-semibold"
      >
        <p>{{ annonce().content.salaire }} €</p>
      </div>
      <div class="grow pl-15">
        <p class="text-2xl text-JobTracker-blue font-semibold">
          {{ annonce().poste }}
        </p>
        <p class="text-xl text-JobTracker-blue font-semibold">
          {{ annonce().entreprise.name }}
        </p>
        <p class="flex items-center gap-2 text-lg">
          {{ annonce().entreprise.ville }}
        </p>
      </div>
      <div class="flex items-center w-[120px] text-JobTracker-blue">
        <p
          [class]="statusConfig()"
          class="rounded-4xl p-2 w-full text-center text-JobTracker-white font-semibold"
        >
          {{ annonce().content.status }}
        </p>
      </div>
    </a>
  `,
})
export class AnnonceCardComponent {
  readonly status = inject(STATUS_COLOR);

  readonly annonce = input.required<Annonce>();
  readonly goToDetail = output<Annonce['id']>();

  readonly statusConfig: Signal<string | undefined> = computed(() => {
    const statusConfig = this.status.find(
      (config) => config.label === this.annonce().content.status
    );
    return statusConfig ? statusConfig.colorClassBg : 'bg-JobTracker-blue';
  });
}
