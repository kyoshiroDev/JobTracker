import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonNewCandidature } from '@apps/frontend/app/components/button-new-candidature';
import { Motivation } from '@apps/frontend/features/dashboard/components/motivation/motivation';
import { AuthService } from '@apps/frontend/auth/auth.service';

@Component({
  selector: 'fdw-heros-section',
  imports: [Motivation, ButtonNewCandidature],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <section
    class="relative flex lg:flex items-center justify-between lg:h-60 overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary-foreground/10 bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center"
  >
    <div class="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/90 to-primary/10"></div>
    <div
      class="relative w-full flex flex-col flex-wrap gap-8 md:flex-row md:items-center md:justify-between px-8 py-10"
    >
      <div class="max-w-xl text-primary-foreground">
        <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight">
          Bonjour {{ user()?.user_metadata?.username }} ! <span aria-hidden="true">👋</span>
        </h1>
        <p class="mt-3 text-primary-foreground text-md">Votre parcours professionnel vous attend</p>
      </div>
      <fdw-motivation />
      <fdw-button-new-candidature
        class="lg:hidden flex flex-nowrap justify-center items-center bg-primary-foreground/15 border-solid border border-border rounded-lg text-primary-foreground font-medium m-auto "
      />
    </div>
  </section>`,
})
export class HerosSection {
  protected readonly authService = inject(AuthService);
  protected readonly user = this.authService.user;
}
