import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'fdw-stats-cards',
  template: `
    <section class="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 lg:gap-8">
      <div class="flex items-center h-30 bg-primary/10 rounded-lg border border-solid border-primary/20">
        <div class="flex flex-col gap-5 justify-between p-5">
          <p class="text-foreground/65 font-semibold text-sm">Total candidatures</p>
          <p class="text-3xl font-bold text-foreground">24</p>
        </div>
      </div>
      <div class="h-30 bg-warning/10 rounded-lg border border-solid border-warning/20">
        <div class="flex flex-col gap-5 justify-between p-5">
          <p class="text-foreground/65 font-semibold text-sm">En attente</p>
          <p class="text-3xl font-bold text-foreground">3</p>
        </div>
      </div>
      <div class="h-30 bg-success/10 rounded-lg border border-solid border-success/20">
        <div class="flex flex-col gap-5 justify-between p-5">
          <p class="text-foreground/65 font-semibold text-sm">Entretiens</p>
          <p class="text-3xl font-bold text-foreground">2</p>
        </div>
      </div>
      <div class="h-30 bg-destructive/10 rounded-lg border border-solid border-destructive/20">
        <div class="flex flex-col gap-5 justify-between p-5">
          <p class="text-foreground/65 font-semibold text-sm">Rejetées</p>
          <p class="text-3xl font-bold text-foreground">1</p>
        </div>
      </div>
    </section>`,
})
export class StatsCards {}
