import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'fdw-heros-section',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="relative flex items-center justify-between h-60 overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary-foreground/10
             bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/90 to-primary/10"></div>
      <div class="relative w-full flex flex-col gap-8 md:flex-row md:items-center md:justify-between px-8 py-10">
        <div class="max-w-xl text-primary-foreground">
          <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight">
            Bonjour {{ user()?.user_metadata?.username }} ! <span aria-hidden="true">👋</span>
          </h1>
          <p class="mt-3 text-primary-foreground text-md">
            Votre parcours professionnel vous attend
          </p>
        </div>
        <div class="md:w-[450px]">
          <div
            class="rounded-xl border border-border/30 bg-primary-foreground/15 backdrop-blur-md
                   text-primary-foreground shadow-lg px-5 py-4 md:ml-auto"
          >
            <div class="flex items-start gap-3">
              <span class="text-lg">⚡</span>
              <div>
                <p class="font-semibold">Motivation du jour</p>
                <p class="text-primary-foreground/90 text-sm">
                  "Chaque candidature vous rapproche de votre objectif !"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`,
})
export class HerosSection {
  protected readonly authService = inject(AuthService)
  protected readonly user = this.authService.user;

}
