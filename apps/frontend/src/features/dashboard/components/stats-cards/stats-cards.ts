import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SupabaseCandidatureGateway } from '../../../candidatures/supabase-candidature-gateway';
import { toSignal } from '@angular/core/rxjs-interop';
import { StatusStylePipe } from '../../../../app/pipes/status-style.pipe';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'fdw-stats-cards',
  imports: [StatusStylePipe],
  host: { class: 'grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 lg:gap-8' },
  template: `
    @for (card of cards(); track card.title) {
    <div [class]="'flex items-center justify-between h-30 px-6 ' + (card.status | statusStyle).styleCard">
      <div class="flex flex-col gap-5 justify-between">
        <p class="text-foreground/65 font-semibold text-sm">{{ card.title }}</p>
        <p class="text-3xl font-bold text-foreground">{{ card.value }}</p>
      </div>
      <div class="flex justify-center items-center rounded-lg shadow-md w-10 h-10 bg-muted">
        <svg [class]="'size-6 ' + (card.status | statusStyle).fontColor">
          <use [attr.href]="(card.status | statusStyle).icon"></use>
        </svg>
      </div>
    </div>
    }
  `,
})
export class StatsCards {
  private readonly _candidaturesGateway = inject(SupabaseCandidatureGateway);
  protected candidatures = toSignal(this._candidaturesGateway.getAllCandidatures(), {
    initialValue: [],
  });

  readonly cards = computed(() => {
    const list = this.candidatures();

    const counts = list.reduce<Record<string, number>>((acc, c) => {
      acc[c.status] = (acc[c.status] ?? 0) + 1;
      return acc;
    }, {});

    return [
      { title: 'Total candidatures', value: list.length, status: 'Total candidatures' },
      { title: 'Entretiens', value: counts['Entretiens'] ?? 0, status: 'Entretiens' },
      { title: 'En attente', value: counts['En attente'] ?? 0, status: 'En attente' },
      { title: 'Rejetées', value: counts['Rejetées'] ?? 0, status: 'Rejetées' },
    ];
  });
}
