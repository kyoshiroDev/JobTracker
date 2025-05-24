import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fdw-notifications',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div
      class="flex justify-center items-center gap-5 hover:bg-[#00AAFF] cursor-pointer rounded-md px-4 "
    >
      <p class="text-xl py-2">🔔 Notifications</p>
      <span
        class="flex justify-center text-md items-center rounded-full font-semibold w-8 h-8 bg-red-600 "
        >10</span
      >
    </div>
  `,
})
export class NotificationsComponent {}
