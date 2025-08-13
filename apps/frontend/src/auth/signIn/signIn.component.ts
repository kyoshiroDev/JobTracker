import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from '../../icons/email.component';
import { LockComponent } from '../../icons/lock.component';
import { EyeCloseComponent } from '../../icons/eye-close.component';
import { EyeOpenComponent } from '../../icons/eye-open.component';
import { RowRightComponent } from '../../icons/row-right.component';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthForm } from '../auth';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'fdw-auth-signIn',
  imports: [
    CommonModule,
    EmailComponent,
    LockComponent,
    EyeCloseComponent,
    EyeOpenComponent,
    RowRightComponent,
    ReactiveFormsModule,
  ],
  template: ` <form [formGroup]="formSignIn" (ngSubmit)="onSubmit()" class="px-6 pb-6 pt-4">
    <!-- Email -->
    <label
      for="email"
      class="block text-sm font-medium text-jobtracker-text-primary mt-4 mb-2 pl-1"
    >Email<span class="text-red-800 flex-col justify-start pl-1">*</span></label
    >
    <div class="relative mb-5">
      <div
        class="flex items-center border border-jobtracker-border rounded-md focus-within:ring-2 focus-within:ring-jobtracker-primary/40 focus-within:border-jobtracker-primary transition"
        [class.border-red-600]="invalidSaisie('email')"
      >
          <span class="pl-3 flex items-center">
        <fdw-email />
      </span>
        <input
          id="email"
          name="email"
          autocomplete="email"
          autocapitalize="words"
          formControlName="email"
          type="email"
          placeholder="votre@email.com"
          class="flex-1 h-9 border-0 outline-none pl-2 placeholder:opacity-70"
        />
      </div>
      @if (invalidSaisie('email', 'required')) {
        <p class="pl-1 mt-1 text-xs text-red-600">Ce champ est obligatoire.</p>
      }
      @if (invalidSaisie('email', 'email')) {
        <p class="pl-1 mt-1 text-xs text-red-600">L’adresse e-mail n’est pas valide.</p>
      }
    </div>

    <!-- Mot de passe -->
    <label
      for="password"
      class="block text-sm font-medium text-jobtracker-text-primary mt-4 mb-2 pl-1"
    >Mot de passe<span class="text-red-800 flex-col justify-start pl-1">*</span></label
    >
    <div class="relative">
      <div
        class="flex items-center border border-jobtracker-border rounded-md focus-within:ring-2 focus-within:ring-jobtracker-primary/40 focus-within:border-jobtracker-primary transition"
        [class.border-red-600]="invalidSaisie('password')"
      >
        <span class="pl-3 flex items-center">
        <fdw-lock />
      </span>
        <input
          id="password"
          name="password"
          autocomplete="new-password"
          autocapitalize="words"
          [type]="typePassword()"
          formControlName="password"
          placeholder="Mot de passe"
          class="flex-1 h-9 border-0 outline-none pl-2 placeholder:opacity-70 pt-0.5"
        />
        <button
          (click)="switchTypePassword()"
          type="button"
          class="pr-3 inline-flex items-center cursor-pointer"
        >
          @if (typePassword() === 'password') {
            <fdw-eye-close />
          } @else () {
            <fdw-eye-open />
          }
        </button>
      </div>
      @if (invalidSaisie('password', 'required')) {
        <p class="pl-1 mt-1 text-xs text-red-600">Ce champ est obligatoire.</p>
      }
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
export class SignInComponent {
  protected readonly typePassword = signal('password');
  protected readonly toast = inject(ToastrService) ;
  protected readonly fb = inject(FormBuilder)

  protected readonly formSignIn = this.fb.group<Pick<AuthForm, 'email' | 'password'>>({
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required]),
  })

  switchTypePassword() {
    return this.typePassword() === 'password'
      ? this.typePassword.set('text')
      : this.typePassword.set('password');
  }

  invalidSaisie(controlName: string, errorType?: string): boolean {
    const control = this.formSignIn.get(controlName);
    if (!control) return false;
    if (errorType) {
      return control.hasError(errorType) && control.touched;
    }
    return control.invalid && control.touched;
  }

  protected onSubmit() {
    if (this.formSignIn.invalid) {
      this.formSignIn.markAllAsTouched();
      this.toast.error('Formulaire invalide');
      return;
    }
    this.toast.success('Connexion réussi');
    this.formSignIn.reset();
  }
}
