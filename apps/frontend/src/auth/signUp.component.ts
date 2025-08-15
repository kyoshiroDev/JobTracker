import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EyeOpenIconComponent } from '../icons/eye-open-icon.component';
import { EyeCloseIconComponent } from '../icons/eye-close-icon.component';
import { LockIconComponent } from '../icons/lock-icon.component';
import { RowRightIconComponent } from '../icons/row-right-icon.component';
import { EmailIconComponent } from '../icons/email-icon.component';
import { UserIconComponent } from '../icons/user-icon.component';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthForm } from './auth';

@Component({
  selector: 'fdw-auth-signUp',
  imports: [
    CommonModule,
    EyeOpenIconComponent,
    EyeCloseIconComponent,
    LockIconComponent,
    RowRightIconComponent,
    EmailIconComponent,
    UserIconComponent,
    ReactiveFormsModule,
  ],
  template: `
    <form
      class="px-6 pb-6 pt-4"
      [formGroup]="formSignUp"
      (ngSubmit)="onSubmit()"
      xmlns="http://www.w3.org/1999/html">
      <!-- Nom complet -->
      <label for="name" class="block text-sm font-medium text-jobtracker-text-primary mt-4 mb-2 pl-1">
        Nom complet <span class="text-red-800 pl-1">*</span>
      </label>

      <div class="mb-5">
        <div
          class="flex items-center border border-jobtracker-border rounded-md focus-within:ring-2 focus-within:ring-jobtracker-primary/40 focus-within:border-jobtracker-primary transition"
          [class.border-red-600]="invalidSaisie('name')"
        >
          <span class="pl-3 flex items-center">
            <fdw-user-icon class="block w-4 h-4" />
         </span>
          <input
            id="name"
            name="name"
            autocomplete="name"
            autocapitalize="words"
            formControlName="name"
            type="text"
            placeholder="Jean Dupont"
            class="flex-1 h-9 border-0 outline-none pl-2 placeholder:opacity-70 pt-0.5"
          />
        </div>

        @if (invalidSaisie('name', 'required')) {
          <p class="pl-1 mt-1 text-xs text-red-600">Ce champ est obligatoire.</p>
        }
      </div>

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
        <fdw-email-icon />
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
        <fdw-lock-icon />
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
              <fdw-eye-close-icon />
            } @else () {
              <fdw-eye-open-icon />
            }
          </button>
        </div>
        @if (invalidSaisie('password', 'required')) {
          <p class="pl-1 mt-1 text-xs text-red-600">Ce champ est obligatoire.</p>
        }
      </div>

      <!-- Confirmation du mont de pass -->
      <label
        for="confirm-password"
        class="block text-sm font-medium text-jobtracker-text-primary mt-4 mb-2 pl-1"
      >Confirmer le mot de passe<span class="text-red-800 flex-col justify-start pl-1">*</span></label
      >
      <div class="relative">
        <div
          class="flex items-center border border-jobtracker-border rounded-md focus-within:ring-2 focus-within:ring-jobtracker-primary/40 focus-within:border-jobtracker-primary transition"
          [class.border-red-600]="invalidSaisie('confirmPassword') || match()"
        >
        <span class="pl-3 flex items-center">
        <fdw-lock-icon />
      </span>
          <input
            id="confirm-password"
            name="confirm-password"
            autocomplete="new-password"
            autocapitalize="words"
            formControlName="confirmPassword"
            [type]="typeConfirmPassword()"
            placeholder="Confirmer vôtre mot de passe"
            class="flex-1 h-9 border-0 outline-none pl-2 placeholder:opacity-70 pt-0.5"
          />
          <button
            (click)="switchTypeConfirmPassword()"
            type="button"
            class="pr-3 inline-flex items-center cursor-pointer"
          >
            @if (typeConfirmPassword() === 'password') {
              <fdw-eye-close-icon />
            } @else () {
              <fdw-eye-open-icon />
            }
          </button>
        </div>
        @if (invalidSaisie('confirmPassword', 'required')) {
          <p class="pl-1 mt-1 text-xs text-red-600">Ce champ est obligatoire.</p>
        }
        @if (match()) {
          <p class="pl-1 mt-1 text-xs text-red-600">Les mots de passe ne correspondent pas.</p>
        }
      </div>

      <!-- CTA -->
      <button
        type="submit"
        class="mt-8 w-full h-9 text-sm rounded-lg bg-linear-to-r from-jobtracker-primary to-jobtracker-primary/75 text-white font-medium hover:opacity-95 active:opacity-90 transition inline-flex items-center justify-center gap-2 cursor-pointer"
      >
        Créer un compte
        <fdw-row-right-icon />
      </button>
    </form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  protected readonly typePassword = signal<string>('password');
  protected readonly typeConfirmPassword = signal<string>('password');
  protected readonly fb = inject(FormBuilder);
  protected readonly toast = inject(ToastrService);

  protected switchTypePassword(): void {
    return this.typePassword() === 'password'
      ? this.typePassword.set('text')
      : this.typePassword.set('password');
  }

  protected switchTypeConfirmPassword(): void {    return this.typeConfirmPassword() === 'password'
      ? this.typeConfirmPassword.set('text')
      : this.typeConfirmPassword.set('password');
  }

  protected readonly formSignUp = this.fb.nonNullable.group<AuthForm>({
    name: this.fb.nonNullable.control('', [Validators.required]),
    email: this.fb.nonNullable.control('', [Validators.required, Validators.email]),
    password: this.fb.nonNullable.control('', [Validators.required]),
    confirmPassword: this.fb.nonNullable.control('', [Validators.required]),
  });

  protected match():boolean{
    return this.formSignUp.controls.password?.value !== this.formSignUp.controls.confirmPassword?.value;
  }

  protected invalidSaisie(controlName: string, errorType?: string): boolean {
    const control = this.formSignUp.get(controlName);
    if (!control) return false;
    if (errorType) {
      return control.hasError(errorType) && control.touched;
    }
    return control.invalid && control.touched;
  }

  protected onSubmit(): void {
    if (this.formSignUp.invalid || this.match()) {
      this.formSignUp.markAllAsTouched();
      this.toast.error('Formulaire invalide');
      return;
    }
    this.toast.success('Enregistrement réussi');
    this.formSignUp.reset();
  }
}
