import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EyeOpenIconComponent } from '../icons/eye-open-icon.component';
import { EyeCloseIconComponent } from '../icons/eye-close-icon.component';
import { LockIconComponent } from '../icons/lock-icon.component';
import { RowRightIconComponent } from '../icons/row-right-icon.component';
import { EmailIconComponent } from '../icons/email-icon.component';
import { UserIconComponent } from '../icons/user-icon.component';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthForm } from '../../../../libs/interfaces/auth';
import { AuthService } from './auth.service';

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
  >
    <!-- Nom complet -->
    <label
      for="name"
      class="block text-sm font-medium text-jobtracker-text-primary mt-4 mb-2 pl-1"
    >
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
      >Email<span class="text-red-800 flex-col justify-start pl-1"
        >*</span
      ></label
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
      } @if (invalidSaisie('email', 'email')) {
      <p class="pl-1 mt-1 text-xs text-red-600">
        L’adresse e-mail n’est pas valide.
      </p>
      }
    </div>

    <!-- Mot de passe -->
    <label
      for="password"
      class="block text-sm font-medium text-jobtracker-text-primary mt-4 mb-2 pl-1"
      >Mot de passe<span class="text-red-800 flex-col justify-start pl-1"
        >*</span
      ></label
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
          [type]="typePasswordInput()"
          formControlName="password"
          placeholder="Mot de passe"
          class="flex-1 h-9 border-0 outline-none pl-2 placeholder:opacity-70 pt-0.5"
        />
        <button
          (click)="typePasswordChanges.emit('text')"
          type="button"
          class="pr-3 inline-flex items-center cursor-pointer"
        >
          @if (typePasswordInput() === 'password') {
          <fdw-eye-close-icon />
          } @else {
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
      >Confirmer le mot de passe<span
        class="text-red-800 flex-col justify-start pl-1"
        >*</span
      ></label
    >
    <div class="relative">
      <div
        class="flex items-center border border-jobtracker-border rounded-md focus-within:ring-2 focus-within:ring-jobtracker-primary/40 focus-within:border-jobtracker-primary transition"
        [class.border-red-600]="invalidSaisie('confirmPassword') || passwordMismatch()"
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
          [type]="typeConfirmPasswordInput()"
          placeholder="Confirmer vôtre mot de passe"
          class="flex-1 h-9 border-0 outline-none pl-2 placeholder:opacity-70 pt-0.5"
        />
        <button
          (click)="typeConfirmPasswordChanges.emit('text')"
          type="button"
          class="pr-3 inline-flex items-center cursor-pointer"
        >
          @if (typeConfirmPasswordInput() === 'password') {
          <fdw-eye-close-icon />
          } @else {
          <fdw-eye-open-icon />
          }
        </button>
      </div>
      @if (invalidSaisie('confirmPassword', 'required')) {
      <p class="pl-1 mt-1 text-xs text-red-600">Ce champ est obligatoire.</p>
      } @if (passwordMismatch()) {
      <p class="pl-1 mt-1 text-xs text-red-600">
        Les mots de passe ne correspondent pas.
      </p>
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
  protected readonly fb = inject(NonNullableFormBuilder);
  protected readonly toast = inject(ToastrService);
  protected readonly serviceAuth = inject(AuthService);

  readonly typePasswordInput = input.required<string>();
  readonly typeConfirmPasswordInput = input.required<string>();
  readonly typePasswordChanges = output<'password' | 'text'>();
  readonly typeConfirmPasswordChanges = output<'password' | 'text'>();

  protected readonly formSignUp = this.fb.group<AuthForm>({
    name: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required]),
    confirmPassword: this.fb.control('', [Validators.required]),
  }, { validators: this.passwordsMatchValidator() });

  protected passwordsMatchValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const pwd = group.get('password')?.value ?? '';
      const confirm = group.get('confirmPassword')?.value ?? '';
      return pwd && confirm && pwd !== confirm
        ? { passwordMismatch: true }
        : null;
    };
  }

  protected passwordMismatch(): boolean {
    const touched = this.formSignUp.get('confirmPassword')?.touched
      || this.formSignUp.get('password')?.touched;
    return touched ? this.formSignUp.hasError('passwordMismatch') : false;
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
    if (this.formSignUp.invalid ) {
      this.formSignUp.markAllAsTouched();
      this.toast.error('Formulaire invalide');
      return;
    }
    const { name, email, password } = this.formSignUp.getRawValue()
    this.serviceAuth.SignUp({ name, email, password }).subscribe({
      next: () => {
        this.toast.success('Enregistrement réussi');
        this.formSignUp.reset();
      },
      error: () => {
        this.toast.info("Erreur lors de l'enregistrement");
      }
    })
  }
}
