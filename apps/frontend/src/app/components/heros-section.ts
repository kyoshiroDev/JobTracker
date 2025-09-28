import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { MotivationComponent } from './motivation/motivation.component';
import { ButtonNewCandidatureComponent } from './button-new-candidature.component';

@Component({
  selector: 'fdw-heros-section',
  imports: [
    MotivationComponent,
    ButtonNewCandidatureComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="relative flex md:flex items-center justify-between md:h-60 overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary-foreground/10
             bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/90 to-primary/10"></div>
      <div
        class="relative w-full flex flex-col flex-wrap gap-8 md:flex-row md:items-center md:justify-between px-8 py-10">
        <div class="max-w-xl text-primary-foreground">
          <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight">
            Bonjour {{ user()?.user_metadata?.username }} ! <span aria-hidden="true">👋</span>
          </h1>
          <p class="mt-3 text-primary-foreground text-md">
            Votre parcours professionnel vous attend
          </p>
        </div>
        <fdw-motivation />
        <fdw-button-new-candidature
          class="md:hidden flex flex-nowrap justify-center items-center bg-primary-foreground/15 border-solid border-1 border-border rounded-lg text-primary-foreground font-medium m-auto " />
      </div>
    </section>`,
})
export class HerosSection {
  protected readonly authService = inject(AuthService)
  protected readonly user = this.authService.user;
}
