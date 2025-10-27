import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SupabaseCandidatureGateway } from './supabase-candidature-gateway';
import { Candidature } from './candidature';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'fdw-candidatures-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col w-2/3 gap-4 border border-border rounded-lg p-8 shadow-sm',
  },
  template: `
    <div class="flex items-center justify-between">
      <div class="inline-flex items-center gap-4">
        <svg class="size-6 text-primary/80">
          <use href="/assets/icons/sprite.svg#i-suitcase"></use>
        </svg>
        <h2 class="text-2xl font-semibold">Candidatures récentes</h2>
      </div>
      <a
        class="inline-flex items-center gap-4 text-sm text-foreground/65 font-semibold hover:text-primary cursor-pointer"
      >Voir tout
        <svg class="size-3.5 mb-0.5">
          <use href="/assets/icons/sprite.svg#i-row-right"></use>
        </svg
        >
      </a>
    </div>
    @for (candidature of topThree(); track candidature.id) {
      <section
        class="relative flex flex-wrap items-center justify-between border-border border-solid border-1 rounded-xl p-4">
        <h3 class="font-semibold w-full">{{ candidature.job }}</h3>
        <ul class="inline-flex items-baseline gap-2 text-sm text-foreground/60">
          <li>{{ candidature.company?.name }}</li>
          <li class="font-extrabold text-lg">.</li>
          <li>{{ candidature.company?.city}}</li>
          <li class="flex font-extrabold text-lg">.</li>
          <li class="text-primary font-medium">{{ candidature.salary }}</li>
        </ul>
        <p
          class="inline-flex items-center gap-1 absolute right-6 text-xs font-medium bg-foreground/10 px-2 py-0.5 rounded-3xl">
          <svg class="size-4 text-sm font-light">
            <use [attr.href]="statusIcon(candidature.status)"></use>
          </svg>
          {{ candidature.status }}
        </p>
      </section>
    }
  `,
})
export class CandidaturesList {
  private readonly _candidaturesGateway = inject(SupabaseCandidatureGateway);
  protected readonly candidatures = toSignal<Candidature[]>(this._candidaturesGateway.getAllCandidatures());
  protected readonly statusStyle = toSignal(this._candidaturesGateway.getStatusStyle(), {initialValue: []});

  topThree = computed(() => (this.candidatures() ?? []).slice(0, 3));

  statusIcon = (status: string) =>
    (this.statusStyle()?.find(s => s.status === status)?.icon);
}
