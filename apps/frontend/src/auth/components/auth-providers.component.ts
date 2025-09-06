import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fdw-auth-providers',
  template: `
    <div class="flex items-center justify-center">
      <span class="px-1 text-xs uppercase tracking-wide text-jobtracker-text-secondary bg-white">
        ou continuer avec
      </span>
    </div>
    <div class="grid grid-cols-2 gap-3 p-8">
      <button
        type="button"
        class="h-10 rounded-md border border-jobtracker-border bg-jobtracker-background hover:bg-white/50 transition inline-flex items-center justify-center gap-2 cursor-pointer"
      >
        <span class="font-medium">G</span>
        <span class="text-sm">Google</span>
      </button>
      <button
        type="button"
        class="h-10 rounded-md border border-jobtracker-border bg-jobtracker-background hover:bg-white/50 transition inline-flex items-center justify-center gap-2 cursor-pointer"
      >
        <span class="font-medium">L</span>
        <span class="text-sm">Linkedin</span>
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthProvidersComponent {}
