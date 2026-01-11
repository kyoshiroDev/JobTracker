import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { InMemoryMotivationGateway } from '@apps/frontend/features/dashboard/components/motivation/in-memory-motivation.gateway';

@Component({
  selector: 'fdw-motivation',
  host: { class: 'md:w-[450px]' },
  template: `
    <div
      class="rounded-xl border border-border/30 bg-primary-foreground/15 backdrop-blur-md
                   text-primary-foreground shadow-lg px-5 py-4 md:ml-auto"
    >
      <div class="flex items-start gap-3">
        <span class="text-lg">⚡</span>
        <div>
          <p class="font-semibold">Motivation du jour</p>
          <p class="text-primary-foreground/90 text-sm">"{{ this.motivationService.selected()?.text }}"</p>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Motivation {
  protected readonly motivationService = inject(InMemoryMotivationGateway);
}
