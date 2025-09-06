import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fdw-auth-header',
  template: ` <header class="text-center mb-6 md:mb-7">
    <h1 class="text-3xl font-bold bg-gradient-primary text-transparent clip-text">JobTracker</h1>
    <p class="mt-2 text-muted-foreground/75 text-md">Gérez vos candidatures efficacement</p>
  </header>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthHeaderComponent {}
