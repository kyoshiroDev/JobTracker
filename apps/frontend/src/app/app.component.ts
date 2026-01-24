import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'fdw-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  template: `
    <main class="max-h-screen">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {}
