import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';
import { CreateUser } from '@libs/schemas-zod';
import { Router } from '@angular/router';
import { passwordsMatchValidator } from './register.validators';
import { signal } from '@angular/core';

type AuthForm = {
  username: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
};

@Component({
  selector: 'fdw-auth-register',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form class="px-6 pb-6 pt-4" [formGroup]="formRegister" (ngSubmit)="onSubmit()">
      <!-- Nom complet -->
      <label for="username" class="block text-sm text-foreground mt-4 mb-2 pl-1">
        Nom complet <span class="text-destructive pl-1">*</span>
      </label>
      <div class="mb-5">
        <div class="input" [class.border-destructive]="invalidSaisie('username')">
          <span class="pl-3 flex items-center">
            <svg class="size-7 text-foreground">
              <use href="assets/icons/sprite.svg#i-user"></use>
            </svg>
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
        <p class="pl-1 mt-1 text-xs text-destructive">Ce champ est obligatoire.</p>
        }
      </div>

      <!-- Email -->
      <label for="email" class="block text-sm text-foreground mt-4 mb-2 pl-1">
        Email <span class="text-destructive pl-1">*</span>
      </label>
      <div class="relative mb-5">
        <div class="input" [class.border-destructive]="invalidSaisie('email')">
          <span class="pl-3 flex items-center">
            <svg class="size-6 text-foreground">
              <use href="assets/icons/sprite.svg#i-email"></use>
            </svg>
          </span>
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
        <p class="pl-1 mt-1 text-xs text-destructive">Ce champ est obligatoire.</p>
        } @if (invalidSaisie('email', 'email')) {
        <p class="pl-1 mt-1 text-xs text-destructive">L’adresse e-mail n’est pas valide.</p>
        }
      </div>

      <!-- Mot de passe -->
      <label for="password" class="block text-sm text-foreground mt-4 mb-2 pl-1">
        Mot de passe <span class="text-destructive pl-1">*</span>
      </label>
      <div class="relative">
        <div class="input" [class.border-destructive]="invalidSaisie('password')">
          <span class="pl-3 flex items-center">
            <svg class="size-6 text-foreground">
              <use href="assets/icons/sprite.svg#i-lock"></use>
            </svg>
          </span>
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
            <svg class="size-6 text-foreground">
              <use href="assets/icons/sprite.svg#i-eye-close"></use>
            </svg>
            } @else {
            <svg class="size-6 text-foreground">
              <use href="assets/icons/sprite.svg#i-eye-open"></use>
            </svg>
            }
          </button>
        </div>
        @if (invalidSaisie('password', 'required')) {
        <p class="pl-1 mt-1 text-xs text-destructive">Ce champ est obligatoire.</p>
        }
      </div>

      <!-- Confirmation du mot de passe -->
      <label for="confirm-password" class="block text-sm text-foreground mt-4 mb-2 pl-1">
        Confirmer le mot de passe <span class="text-destructive pl-1">*</span>
      </label>
      <div class="relative">
        <div class="input" [class.border-destructive]="invalidSaisie('confirmPassword') || passwordMismatch()">
          <span class="pl-3 flex items-center">
            <svg class="size-6 text-foreground">
              <use href="assets/icons/sprite.svg#i-lock"></use>
            </svg>
          </span>
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
            <svg class="size-6 text-foreground">
              <use href="assets/icons/sprite.svg#i-eye-close"></use>
            </svg>
            } @else {
            <svg class="size-6 text-foreground">
              <use href="assets/icons/sprite.svg#i-eye-open"></use>
            </svg>
            }
          </button>
        </div>
        @if (invalidSaisie('confirmPassword', 'required')) {
        <p class="pl-1 mt-1 text-xs text-destructive">Ce champ est obligatoire.</p>
        } @if (passwordMismatch()) {
        <p class="pl-1 mt-1 text-xs text-destructive">Les mots de passe ne correspondent pas.</p>
        }
      </div>

      <!-- CTA -->
      <button
        type="submit"
        class="w-full h-9 text-sm mt-8 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-95 active:opacity-90 transition inline-flex items-center justify-center gap-2 cursor-pointer"
      >
        Créer un compte
        <svg class="size-4 text-primary-foreground">
          <use href="assets/icons/sprite.svg#i-row-right"></use>
        </svg>
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
  readonly error = signal<string | null>(null);

  protected readonly formRegister = this.fb.group<AuthForm>(
    {
      username: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
      confirmPassword: this.fb.control('', [Validators.required]),
    },
    { validators: passwordsMatchValidator() },
  );

  protected passwordMismatch(): boolean {
    const touched = this.formRegister.get('confirmPassword')?.touched || this.formRegister.get('password')?.touched;
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

  protected async onSubmit(): Promise<void> {
    if (this.formRegister.invalid) {
      this.formRegister.markAllAsTouched();
      this.toast.error('Formulaire invalide');
      return;
    }

    const form = this.formRegister.getRawValue();
    const user: CreateUser = {
      username: form.username,
      email: form.email,
      password: form.password,
    };

    try {
      const { data, error } = await this.serviceAuth.signUp(user);

      if (error) {
        this.toast.error('Formulaire invalide');
        return;
      }

      const alreadyRegistered = data.user?.identities?.length === 0;

      if (alreadyRegistered) {
        this.toast.error('Cet email est déjà utilisé ou doit être confirmé.');
        return;
      }

      this.toast.success('Enregistrement réussi !');
      await this.router.navigate(['/dashboard']).catch(() => {
        this.error.set('Redirection impossible.');
      });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue lors de l’enregistrement.';
      this.error.set(errorMessage);
    }
  }
}
