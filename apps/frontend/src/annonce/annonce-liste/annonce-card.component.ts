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
      class="flex flex-col items-center min-h-[170px] max-h-fit xl:text-left gap-4 bg-JobTracker-white rounded-md p-4 shadow-md cursor-pointer hover:scale-102 transition-transform duration-500 ease-in-out"
    >
      <div class="flex justify-between w-full">
        <p class="text-lg md:text-2xl text-JobTracker-blue font-semibold first-letter:uppercase">
          {{ annonce().poste }}
        </p>
        <div
          class="flex items-center justify-end w-[120px] text-JobTracker-blue"
        >
          <p
            [class]="statusConfig()"
            class="min-w-[74px] md:min-w-[110px] md:text-sm text-xs rounded-4xl py-2 px-2 md:px-4 text-center text-JobTracker-white font-semibold"
          >
            {{ annonce().content.status }}
          </p>
        </div>
      </div>
      <div class="flex flex-col justify-start w-full gap-1">
        <div class="flex items-center text-sm md:text-sm gap-1">
          <p class="font-semibold">
            Entreprise :
          </p>
          <p>
            {{ annonce().entreprise.name }}
          </p>
        </div>
        <div class="flex items-center text-sm md:text-sm gap-1">
          <p class="font-semibold">
            Ville :</p>
          <p>
            {{ annonce().entreprise.ville }}
          </p>
        </div>
      </div>
      <div
        class="w-full flex justify-start items-center text-sm md:text-lg text-JobTracker-blue font-semibold"
      >
        <p>Salaire : {{ annonce().content.salaire }} € /ans</p>
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
