import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from '../../icons/email.component';
import { LockComponent } from '../../icons/lock.component';
import { EyeCloseComponent } from '../../icons/eye-close.component';
import { EyeOpenComponent } from '../../icons/eye-open.component';
import { RowRightComponent } from '../../icons/row-right.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'fdw-auth-signing',
  imports: [
    CommonModule,
    EmailComponent,
    LockComponent,
    EyeCloseComponent,
    EyeOpenComponent,
    RowRightComponent,
    ReactiveFormsModule,
  ],
  template: ` <form class="px-6 pb-6 pt-4">
    <!-- Email -->
    <label
      for="email"
      class="block text-sm font-medium text-jobtracker-text-primary mt-4 mb-2 pl-1"
      >Email<span class="text-red-800 flex-col justify-start pl-1">*</span></label
    >
    <div class="relative mb-5">
      <span
        class="absolute inset-y-0 left-3 flex items-center pointer-events-none"
      >
        <fdw-email />
      </span>
      <input
        id="email"
        name="email"
        autocomplete="email"
        autocapitalize="words"
        type="email"
        placeholder="votre@email.com"
        class="w-full h-10 rounded-md border border-jobtracker-border pl-10 pr-3 outline-none focus:ring-2 focus:ring-jobtracker-primary/40 focus:border-jobtracker-primary transition placeholder:opacity-70"
      />
    </div>

    <!-- Mot de passe -->
    <label
      for="password"
      class="block text-sm font-medium text-jobtracker-text-primary mt-4 mb-2 pl-1"
      >Mot de passe<span class="text-red-800 flex-col justify-start pl-1">*</span></label
    >
    <div class="relative">
      <span
        class="absolute inset-y-0 left-3 flex items-center pointer-events-none"
      >
        <fdw-lock />
      </span>
      <input
        id="password"
        name="password"
        autocomplete="new-password"
        autocapitalize="words"
        [type]="typePassword()"
        placeholder="Mot de passe"
        class="w-full h-10 rounded-md border border-jobtracker-border px-10 outline-none focus:ring-2 focus:ring-jobtracker-primary/40 focus:border-jobtracker-primary transition placeholder:opacity-70"
      />
      <button
        (click)="switchTypePassword()"
        type="button"
        class="absolute inset-y-0 right-3 inline-flex items-center cursor-pointer"
      >
        @if (typePassword() === 'password') {
        <fdw-eye-close />
        } @else () {
        <fdw-eye-open />
        }
      </button>
    </div>

    <!-- Lien oublié -->
    <div class="text-right my-8">
      <a
        class="text-sm text-jobtracker-dark-primary hover:underline cursor-pointer font-semibold"
        href="#"
        >Mot de passe oublié ?</a
      >
    </div>

    <!-- CTA -->
    <button
      type="submit"
      class="w-full h-9 text-sm rounded-lg bg-linear-to-r from-jobtracker-primary to-jobtracker-primary/75 text-white font-medium hover:opacity-95 active:opacity-90 transition inline-flex items-center justify-center gap-2 cursor-pointer"
    >
      Se connecter
      <fdw-row-right />
    </button>
  </form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigningComponent {
  protected readonly typePassword = signal('password');

  switchTypePassword() {
    return this.typePassword() === 'password'
      ? this.typePassword.set('text')
      : this.typePassword.set('password');
  }
}
