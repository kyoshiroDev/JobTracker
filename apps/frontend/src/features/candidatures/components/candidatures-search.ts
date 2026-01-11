import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SupabaseCandidatureGateway } from '../supabase-candidature-gateway';

@Component({
  selector: 'fdw-candidatures-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  host: { class: 'inline-flex p-2 bg-white rounded-lg border border-border' },
  template: `
    <form class="flex gap-4 w-full p-4">
      <div class="relative w-full">
        <svg class="size-6 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2">
          <use href="assets/icons/sprite.svg#i-search"></use>
        </svg>
        <input
          type="text"
          class="w-full bg-muted text-foreground h-12 px-4 rounded-lg input placeholder:text-muted-foreground pl-12"
          placeholder="Rechercher par poste, entreprise, localisation..."
        />
      </div>
      <div class="relative">
        <label for="candidatures-status"></label>
        <svg class="size-6 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2">
          <use href="assets/icons/sprite.svg#i-filter"></use>
        </svg>
        <select
          name="status"
          id="candidatures-status"
          class="appearance-none bg-muted text-foreground h-12 pr-10 rounded-lg input placeholder:text-muted-foreground pl-12 cursor-pointer"
        >
          <option value="">Tous les statuts</option>
          @for (status of status(); track status) {
            <option [value]="status">{{ status }}</option>
          }
        </select>
        <svg class="size-6 text-muted-foreground absolute top-1/2 -translate-y-1/2 right-2" pointer-events="none">
          <use href="assets/icons/sprite.svg#i-chevron-down"></use>
        </svg>
      </div>
    </form>
  `,
})
export class CandidaturesSearch {
  protected readonly candidaturesGateway = inject(SupabaseCandidatureGateway);
  protected readonly candidatures = toSignal(this.candidaturesGateway.getAllCandidatures(), { initialValue: [] });

  status = computed(() => Array.from(new Set(this.candidatures().map((c) => c.status))));
}
