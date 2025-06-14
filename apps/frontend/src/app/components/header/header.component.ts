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
      <div class="cursor-pointer flex flex-col justify-around min-w-8 min-h-8 right-0 mx-4 md:hidden">
        <span class="h-1 w-full bg-JobTracker-white rounded-full"></span>
        <span class="h-1 w-full bg-JobTracker-white rounded-full"></span>
        <span class="h-1 w-full bg-JobTracker-white rounded-full"></span>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  readonly name = signal<string>('Peter Parker');
}
