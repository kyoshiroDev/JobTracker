import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';

@Component({
  selector: 'fdw-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  host: {
    class: 'flex w-full max-h-20',
  },
  template: ` <header class="flex w-full h-20 bg-jobtracker-background-side "></header> `,
})
export class HeaderComponent {
  readonly name = signal('Peter Parker');
  readonly openSideBar = output();
}
