import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Motivation } from './motivation';

@Component({
  selector: 'fdw-motivation',
  imports: [],
  template: `
    <div class="md:w-[450px]">
      <div
        class="rounded-xl border border-border/30 bg-primary-foreground/15 backdrop-blur-md
                   text-primary-foreground shadow-lg px-5 py-4 md:ml-auto"
      >
        <div class="flex items-start gap-3">
          <span class="text-lg">⚡</span>
          <div>
            <p class="font-semibold">Motivation du jour</p>
            <p class="text-primary-foreground/90 text-sm">
              "{{ this.motivationService.selected()?.text }}"
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MotivationComponent {
  protected readonly motivationService = inject(Motivation)
}
