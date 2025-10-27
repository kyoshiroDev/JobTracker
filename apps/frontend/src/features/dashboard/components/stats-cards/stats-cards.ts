import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'fdw-stats-cards',
  host: { class: 'grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 lg:gap-8' },
  template: `
    @for (card of cards(); track card.title) {
      <div [class]="card.classes">
        <div class="flex flex-col gap-5 justify-between p-5">
          <p class="text-foreground/65 font-semibold text-sm">{{ card.title }}</p>
          <p class="text-3xl font-bold text-foreground">{{ card.value }}</p>
        </div>
      </div>
    }
  `,
})
export class StatsCards {
  readonly cards = signal([
    {
      title: 'Total candidatures',
      value: 24,
      classes: 'flex items-center h-30 bg-primary/10 rounded-lg border border-solid border-primary/20',
    },
    {
      title: 'En attente',
      value: 3,
      classes: 'flex items-center h-30 bg-warning/10 rounded-lg border border-solid border-warning/20',
    },
    {
      title: 'Entretiens',
      value: 2,
      classes: 'flex items-center h-30 bg-success/10 rounded-lg border border-solid border-success/20',
    },
    {
      title: 'Rejetées',
      value: 1,
      classes: 'flex items-center h-30 bg-destructive/10 rounded-lg border border-solid border-destructive/20',
    },
  ]);
}
