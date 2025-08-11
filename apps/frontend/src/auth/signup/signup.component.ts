import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fdw-auth-signup',
  imports: [CommonModule],
  template: ` <form class="px-6 pb-6 pt-4">
    <!-- Nom complet -->
    <label
      class="block text-sm font-medium text-jobtracker-text-primary mt-4 mb-2"
      >Nom Complet</label
    >
    <div class="relative mb-5">
      <span
        class="absolute inset-y-0 left-3 flex items-center pointer-events-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
          />
        </svg>
      </span>
      <input
        type="text"
        placeholder="Jean Dupont"
        class="w-full h-10 rounded-md border border-jobtracker-border pl-10 pr-3 outline-none focus:ring-2 focus:ring-jobtracker-primary/40 focus:border-jobtracker-primary transition placeholder:opacity-70"
      />
    </div>

    <!-- Email -->
    <label
      class="block text-sm font-medium text-jobtracker-text-primary mt-4 mb-2"
      >Email</label
    >
    <div class="relative mb-5">
      <span
        class="absolute inset-y-0 left-3 flex items-center pointer-events-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            />
            <path d="m3 7l9 6l9-6" />
          </g>
        </svg>
      </span>
      <input
        type="email"
        placeholder="votre@email.com"
        class="w-full h-10 rounded-md border border-jobtracker-border pl-10 pr-3 outline-none focus:ring-2 focus:ring-jobtracker-primary/40 focus:border-jobtracker-primary transition placeholder:opacity-70"
      />
    </div>

    <!-- Mot de passe -->
    <label
      id="password"
      class="block text-sm font-medium text-jobtracker-text-primary mt-4 mb-2"
      >Mot de passe</label
    >
    <div class="relative">
      <span
        class="absolute inset-y-0 left-3 flex items-center pointer-events-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              d="M5 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"
            />
            <path
              d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3-5V7a4 4 0 1 1 8 0v4"
            />
          </g>
        </svg>
      </span>
      <input
        [type]="typePassword()"
        name="password"
        placeholder="Mot de passe"
        class="w-full h-10 rounded-md border border-jobtracker-border px-10 outline-none focus:ring-2 focus:ring-jobtracker-primary/40 focus:border-jobtracker-primary transition placeholder:opacity-70"
      />
      <button
        (click)="switchTypePassword()"
        type="button"
        class="absolute inset-y-0 right-3 inline-flex items-center cursor-pointer"
      >
        @if (typePassword() === 'password') {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 9q-3.6 4-9 4T3 9m0 6l2.5-3.8M21 14.976L18.508 11.2M9 17l.5-4m5.5 4l-.5-4"
          />
        </svg>
        } @else () {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0" />
            <path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6" />
          </g>
        </svg>
        }
      </button>
    </div>

    <!-- Confirmation du mont de pass -->
    <label
      id="confirm-password"
      class="block text-sm font-medium text-jobtracker-text-primary mt-4 mb-2"
      >Confirmer le mot de passe</label
    >
    <div class="relative">
      <span
        class="absolute inset-y-0 left-3 flex items-center pointer-events-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              d="M5 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"
            />
            <path
              d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3-5V7a4 4 0 1 1 8 0v4"
            />
          </g>
        </svg>
      </span>
      <input
        [type]="typeConfirmPassword()"
        name="confirm-password"
        placeholder="Confirmer vôtre mot de passe"
        class="w-full h-10 rounded-md border border-jobtracker-border px-10 outline-none focus:ring-2 focus:ring-jobtracker-primary/40 focus:border-jobtracker-primary transition placeholder:opacity-70"
      />
      <button
        (click)="switchTypeConfirmPassword()"
        type="button"
        class="absolute inset-y-0 right-3 inline-flex items-center cursor-pointer"
      >
        @if (typeConfirmPassword() === 'password') {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 9q-3.6 4-9 4T3 9m0 6l2.5-3.8M21 14.976L18.508 11.2M9 17l.5-4m5.5 4l-.5-4"
          />
        </svg>
        } @else () {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0" />
            <path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6" />
          </g>
        </svg>
        }
      </button>
    </div>

    <!-- CTA -->
    <button
      type="submit"
      class="mt-8 w-full h-9 text-sm rounded-lg bg-linear-to-r from-jobtracker-primary to-jobtracker-primary/75 text-white font-medium hover:opacity-95 active:opacity-90 transition inline-flex items-center justify-center gap-2 cursor-pointer"
    >
      Créer un compte
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </button>
  </form>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {
  protected readonly typePassword = signal<string>('password');
  protected readonly typeConfirmPassword = signal<string>('password');

  switchTypePassword(): void {
    return this.typePassword() === 'password'
      ? this.typePassword.set('text')
      : this.typePassword.set('password');
  }

  switchTypeConfirmPassword(): void {
    return this.typeConfirmPassword() === 'password'
      ? this.typeConfirmPassword.set('text')
      : this.typeConfirmPassword.set('password');
  }
}
