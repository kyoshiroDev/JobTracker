import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
  Signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { STATUS_COLOR } from '../../app/tokens/status-color-token';
import { Annonce } from '../annonce';

@Component({
  selector: 'fdw-annonce-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <a
      [routerLink]="['/annonce', annonce().id]"
      class="flex w-full flex-wrap flex-col items-center justify-between min-h-full max-h-fit xl:text-left gap-4 bg-JobTracker-white rounded-md p-4 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out will-change-transform backface-visible transform-gpu"
    >
      <div class="inline-flex gap-4 w-full justify-between">
        <p
          class="text-lg md:text-xl text-JobTracker-blue font-semibold first-letter:uppercase"
        >
          {{ annonce().job }}
        </p>
        <div class="flex items-start w-[120px] text-JobTracker-blue">
          <p
            [class]="statusConfig()"
            class="min-w-[110px] md:text-md text-xs rounded-4xl py-2 px-2 text-center text-JobTracker-white"
          >
            {{ annonce().content.status }}
          </p>
        </div>
      </div>
      <div class="flex flex-col justify-start w-full gap-1">
        <div class="flex items-center text-sm md:text-sm gap-1">
          <p class="font-semibold">Entreprise :</p>
          <p>
            {{ annonce().company.name }}
          </p>
        </div>
        <div class="flex items-center text-sm md:text-sm gap-1">
          <p class="font-semibold">Ville :</p>
          <p>
            {{ annonce().company.city }}
          </p>
        </div>
      </div>
      <div
        class="w-full flex justify-start items-center text-sm md:text-lg text-JobTracker-blue font-semibold"
      >
        <p>Salaire : {{ annonce().content.salary }} € /ans</p>
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
      (config) => config.label === this.annonce().content.status,
    );
    return statusConfig ? statusConfig.colorClassBg : 'bg-JobTracker-blue';
  });
}
