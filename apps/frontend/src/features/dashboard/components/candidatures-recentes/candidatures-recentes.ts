import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { StatusStylePipe } from '../../../../app/pipes/status-style.pipe';
import { SupabaseCandidatureGateway } from '../../../candidatures/supabase-candidature-gateway';

@Component({
  selector: 'fdw-candidatures-recentes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StatusStylePipe, RouterLink],
  host: {
    class: 'flex flex-col w-full lg:w-2/3 gap-4 border border-border rounded-lg p-8 shadow-sm',
  },
  template: `
    <header class="flex items-center justify-between">
      <div class="inline-flex items-center gap-4">
        <svg class="size-6 text-primary/80" aria-hidden="true" focusable="false">
          <use href="/assets/icons/sprite.svg#i-suitcase"></use>
        </svg>
        <h2 id="recent-applications-title" class="text-2xl font-semibold">Candidatures récentes</h2>
      </div>
      <a
        routerLink="/candidatures"
        class="inline-flex items-center gap-2 text-sm text-foreground/65 font-semibold hover:text-primary transition-colors"
        aria-label="Voir toutes les candidatures"
      >
        Voir tout
        <svg class="size-3.5 mb-0.5" aria-hidden="true" focusable="false">
          <use href="/assets/icons/sprite.svg#i-row-right"></use>
        </svg>
      </a>
    </header>
    <ul class="flex flex-col gap-4" role="list">
      @for (candidature of topThree(); track candidature.id) {
        <li>
          <article class="flex items-center justify-between gap-4 border-border border rounded-xl p-4">
            <div class="flex flex-col gap-3 flex-1 min-w-0">
              <h3 class="font-semibold">
                {{ candidature.job }}
              </h3>

              <div class="flex flex-col lg:flex-row items-baseline gap-x-2 gap-y-1 text-sm text-foreground/60">
                <span>{{ candidature.company?.name }}</span>
                <span aria-hidden="true" class="hidden lg:inline">•</span>
                <span>{{ candidature.company?.city }}</span>
                <span aria-hidden="true" class="hidden lg:inline">•</span>
                <span class="text-primary font-medium">{{ candidature.salary }}</span>
              </div>
            </div>
            <span
              [class]="(candidature.status | statusStyle).styleCard"
              class="shrink-0 inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-3xl"
              [attr.aria-label]="'Statut: ' + candidature.status"
            >
              <svg
                [class]="'size-3.5 ' + (candidature.status | statusStyle).fontColor"
                aria-hidden="true"
                focusable="false"
              >
                <use [attr.href]="(candidature.status | statusStyle).icon"></use>
              </svg>
              <span [class]="(candidature.status | statusStyle).fontColor">{{ candidature.status }}</span>
            </span>
          </article>
        </li>
      }
    </ul>
  `,
})
export class CandidaturesRecentes {
  private readonly _candidaturesGateway = inject(SupabaseCandidatureGateway);
  protected candidatures = toSignal(this._candidaturesGateway.getAllCandidatures());

  topThree = computed(() => (this.candidatures() ?? []).slice(0, 3));
}
