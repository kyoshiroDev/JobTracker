import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigningComponent } from './signing/signing.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'fdw-auth',
  standalone: true,
  imports: [CommonModule, SigningComponent, SignupComponent],
  host: {
    class:
      'flex flex-col justify-center items-center min-h-dvh p-4 bg-gradient-to-br from-jobtracker-background via-jobtracker-background flex flex-col items-center',
  },
  template: `
    <header class="text-center mb-6 md:mb-7">
      <h1
        class="text-3xl font-bold bg-linear-to-r from-jobtracker-primary to-jobtracker-primary/55 text-transparent bg-clip-text"
      >
        JobTracker
      </h1>
      <p class="mt-2 text-jobtracker-text-secondary text-md">
        Gérez vos candidatures efficacement
      </p>
    </header>

    <section class="w-full max-w-md">
      <div
        class="bg-white rounded-2xl border border-jobtracker-border shadow-sm"
      >
        <div class="px-5 pt-5">
          <div
            class="bg-jobtracker-bg-gray rounded-md p-1 grid grid-cols-2 gap-1"
          >
            <button
              aria-label="bouton pou afficher le formulaire de login"
              type="button"
              (click)="formAuth.set('login')"
              [class]="loginBtnClass()"
            >
              Connexion
            </button>
            <button
              type="button"
              (click)="formAuth.set('registre')"
              [class]="registerBtnClass()"
            >
              Inscription
            </button>
          </div>
        </div>

        @if (formAuth() === 'login') {
          <fdw-auth-signing />
        } @else {
          <fdw-auth-signup />
        }
        <!-- <div class="flex items-center justify-center">
          <span
            class="px-1 text-xs uppercase tracking-wide text-jobtracker-text-secondary bg-white"
          >
            ou continuer avec
          </span>
        </div>
        <div class="grid grid-cols-2 gap-3 p-8">
          <button
            type="button"
            class="h-10 rounded-md border border-jobtracker-border bg-jobtracker-background hover:bg-white/50 transition inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span class="font-medium">G</span>
            <span class="text-sm">Google</span>
          </button>
          <button
            type="button"
            class="h-10 rounded-md border border-jobtracker-border bg-jobtracker-background hover:bg-white/50 transition inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span class="font-medium">L</span>
            <span class="text-sm">Linkedin</span>
          </button>
        </div>-->
      </div>
    </section>
    <footer class="text-center mt-8 text-sm text-jobtracker-text-secondary">
      En vous inscrivant, vous acceptez nos
      <a href="#" class="text-jobtracker-dark-primary hover:underline"
      >conditions d'utilisation</a
      >
      et notre
      <a href="#" class="text-jobtracker-dark-primary hover:underline"
      >politique de confidentialité</a
      >
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  protected readonly formAuth = signal<'login' | 'registre'>('login');

  protected readonly loginBtnClass = computed(() =>
    this.formAuth() === 'login'
      ? 'h-10 rounded-md text-sm font-medium transition shadow-sm bg-jobtracker-primary text-white cursor-default'
      : 'h-10 rounded-md text-sm font-medium text-jobtracker-text-secondary hover:bg-white/60 transition cursor-pointer'
  );

  protected readonly registerBtnClass = computed(() =>
    this.formAuth() === 'registre'
      ? 'h-10 rounded-md text-sm font-medium transition shadow-sm bg-jobtracker-primary text-white cursor-default'
      : 'h-10 rounded-md text-sm font-medium text-jobtracker-text-secondary hover:bg-white/60 transition cursor-pointer'
  );
}
