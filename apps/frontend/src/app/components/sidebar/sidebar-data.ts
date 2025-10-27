import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SidebarData {
  readonly showSidebar = signal<boolean>(true);

  toggleSidebar() {
    this.showSidebar.update((v) => !v);
  }

  styleSidebar = computed(() => {
    const base = 'flex transition-all ease-in-out duration-300 w-60 flex-col gap-4 border-r border-solid h-screen bg-background p-4'
    return `
    ${base} + ${this.showSidebar() ? 'relative -translate-x-0 opacity-100' : 'fixed -translate-x-full opacity-0'}
    `;
  });
}
