import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, map, startWith } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarData {
  private readonly showSidebarSubject = new BehaviorSubject<boolean>(true);
  readonly showSidebar$ = this.showSidebarSubject.asObservable();

  constructor() {
    fromEvent(window, 'resize')
      .pipe(
        startWith(null),
        map(() => window.innerWidth < 768),
      )
      .subscribe((isMobile) => {
        this.showSidebarSubject.next(!isMobile);
      });
  }

  toggleSidebar() {
    this.showSidebarSubject.next(!this.showSidebarSubject.value);
  }

  readonly styleSidebar$ = this.showSidebar$.pipe(
    map((open) => {
      const base =
        'flex transition-all ease-in-out duration-300 w-60 flex-col gap-4 border-r border-solid h-screen bg-background p-4';

      return `
        ${base} + ${open ? 'relative -translate-x-0 opacity-100' : 'fixed -translate-x-full opacity-0'}
      `;
    }),
  );
}
