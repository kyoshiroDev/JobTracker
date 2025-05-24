import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
//import { NotificationsComponent } from './notifications/notifications.component';

@Component({
  selector: 'fdw-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgOptimizedImage,
    /*NotificationsComponent*/
  ],
  template: `
    <header
      class="flex
  h-30
  bg-JobTracker-blue
  text-JobTracker-white
  justify-between
  items-center"
    >
      <div class="flex justify-center items-center gap-5 px-8">
        <img
          ngSrc="/avatar.webp"
          alt="Avatar"
          class=" rounded-full aspect-square max-w-fit"
          width="80"
          height="80"
          priority
        />

        <h2 class=" px-4 text-xl">Hello {{ name() }}</h2>
      </div>
      <!--<fdw-notifications />-->
    </header>
  `,
})
export class HeaderComponent {
  readonly name = signal<string>('Peter Parker');
}
