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
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';
import { CreateUser } from '@libs/schemas-zod';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { passwordsMatchValidator } from './register.validators';

type AuthForm = {
  username: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
};

@Component({
  selector: 'fdw-auth-register',
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
      [formGroup]="formRegister"
      (ngSubmit)="onSubmit()"
    >
      <!-- Nom complet -->
      <label
        for="username"
        class="block text-sm font-medium text-jobtracker-text-primary mt-4 mb-2 pl-1"
      >
        Nom complet <span class="text-red-800 pl-1">*</span>
      </label>
      <div class="mb-5">
        <div
          class="flex items-center border border-jobtracker-border rounded-md focus-within:ring-2 focus-within:ring-jobtracker-primary/40 focus-within:border-jobtracker-primary transition"
          [class.border-red-600]="invalidSaisie('username')"
        >
          <span class="pl-3 flex items-center">
            <fdw-user-icon class="block w-4 h-4" />
          </span>
          <input
            id="username"
            name="username"
            autocomplete="username"
            formControlName="username"
            type="text"
            placeholder="Jean Dupont"
            class="flex-1 h-9 border-0 outline-none pl-2 placeholder:opacity-70 pt-0.5"
          />
        </div>
        @if (invalidSaisie('username', 'required')) {
        <p class="pl-1 mt-1 text-xs text-red-600">Ce champ est obligatoire.</p>
        }
      </div>

      <!-- Email -->
      <label
        for="email"
        class="block text-sm font-medium text-jobtracker-text-primary mt-4 mb-2 pl-1"
      >
        Email <span class="text-red-800 pl-1">*</span>
      </label>
      <div class="relative mb-5">
        <div
          class="flex items-center border border-jobtracker-border rounded-md focus-within:ring-2 focus-within:ring-jobtracker-primary/40 focus-within:border-jobtracker-primary transition"
          [class.border-red-600]="invalidSaisie('email')"
        >
          <span class="pl-3 flex items-center"><fdw-email-icon /></span>
          <input
            id="email"
            name="email"
            autocomplete="email"
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
      >
        Mot de passe <span class="text-red-800 pl-1">*</span>
      </label>
      <div class="relative">
        <div
          class="flex items-center border border-jobtracker-border rounded-md focus-within:ring-2 focus-within:ring-jobtracker-primary/40 focus-within:border-jobtracker-primary transition"
          [class.border-red-600]="invalidSaisie('password')"
        >
          <span class="pl-3 flex items-center"><fdw-lock-icon /></span>
          <input
            id="password"
            name="password"
            autocomplete="new-password"
            [type]="typePasswordInput()"
            formControlName="password"
            placeholder="Mot de passe"
            class="flex-1 h-9 border-0 outline-none pl-2 placeholder:opacity-70 pt-0.5"
          />
          <button
            type="button"
            (click)="typePasswordChanges.emit('text')"
            class="pr-3 inline-flex items-center cursor-pointer"
            aria-label="Afficher/Masquer le mot de passe"
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

      <!-- Confirmation du mot de passe -->
      <label
        for="confirm-password"
        class="block text-sm font-medium text-jobtracker-text-primary mt-4 mb-2 pl-1"
      >
        Confirmer le mot de passe <span class="text-red-800 pl-1">*</span>
      </label>
      <div class="relative">
        <div
          class="flex items-center border border-jobtracker-border rounded-md focus-within:ring-2 focus-within:ring-jobtracker-primary/40 focus-within:border-jobtracker-primary transition"
          [class.border-red-600]="
            invalidSaisie('confirmPassword') || passwordMismatch()
          "
        >
          <span class="pl-3 flex items-center"><fdw-lock-icon /></span>
          <input
            id="confirm-password"
            name="confirm-password"
            autocomplete="new-password"
            [type]="typeConfirmPasswordInput()"
            formControlName="confirmPassword"
            placeholder="Confirmer vôtre mot de passe"
            class="flex-1 h-9 border-0 outline-none pl-2 placeholder:opacity-70 pt-0.5"
          />
          <button
            type="button"
            (click)="typeConfirmPasswordChanges.emit('text')"
            class="pr-3 inline-flex items-center cursor-pointer"
            aria-label="Afficher/Masquer la confirmation du mot de passe"
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
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  protected readonly fb = inject(NonNullableFormBuilder);
  protected readonly toast = inject(ToastrService);
  protected readonly serviceAuth = inject(AuthService);
  protected readonly router = inject(Router);

  readonly typePasswordInput = input.required<string>();
  readonly typeConfirmPasswordInput = input.required<string>();
  readonly typePasswordChanges = output<'password' | 'text'>();
  readonly typeConfirmPasswordChanges = output<'password' | 'text'>();

  protected readonly formRegister = this.fb.group<AuthForm>(
    {
      username: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
      confirmPassword: this.fb.control('', [Validators.required]),
    },
    { validators: passwordsMatchValidator() }
  );

  protected passwordMismatch(): boolean {
    const touched =
      this.formRegister.get('confirmPassword')?.touched ||
      this.formRegister.get('password')?.touched;
    return touched ? this.formRegister.hasError('passwordMismatch') : false;
  }

  protected invalidSaisie(controlName: string, errorType?: string): boolean {
    const control = this.formRegister.get(controlName);
    if (!control) return false;
    if (errorType) {
      return control.hasError(errorType) && control.touched;
    }
    return control.invalid && control.touched;
  }

  protected onSubmit(): void {
    if (this.formRegister.invalid) {
      this.formRegister.markAllAsTouched();
      this.toast.error('Formulaire invalide');
      return;
    }
    const form = this.formRegister.getRawValue();
    const user = {
      username: form.username,
      email: form.email,
      password: form.password,
    } satisfies CreateUser;
    this.serviceAuth.register(user).subscribe({
      next: () => {
        this.toast.success('Enregistrement réussi');
        this.router.navigate(['/dashboard']).then((error) => {
          if (error) {
            new Error('Erreur lors de la redirection');
          }
        });
        this.formRegister.reset();
      },
      error: (err: HttpErrorResponse) => {
        this.toast.error(
          err.error.message || "Erreur lors de l'enregistrement"
        );
      },
    });
  }
}
