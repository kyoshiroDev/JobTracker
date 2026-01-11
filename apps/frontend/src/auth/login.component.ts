import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '@apps/frontend/auth/auth.service';

@Component({
  selector: 'fdw-auth-login',
  imports: [ReactiveFormsModule],
  template: ` <form [formGroup]="formLogin" (ngSubmit)="onSubmit()" class="px-6 pb-6 pt-4">
    <!-- Email -->
    <label for="email" class="block text-sm text-foreground mt-4 mb-2 pl-1"
      >Email<span class="text-destructive flex-col justify-start pl-1">*</span></label
    >
    <div class="relative mb-5">
      <div class="flex items-center input" [class.border-destructive]="invalidSaisie('email')">
        <span class="pl-3 flex items-center">
          <svg class="size-6 text-foreground">
            <use href="assets/icons/sprite.svg#i-email"></use>
          </svg>
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
      <p class="pl-1 mt-1 text-xs text-destructive">Ce champ est obligatoire.</p>
      } @if (invalidSaisie('email', 'email')) {
      <p class="pl-1 mt-1 text-xs text-destructive">L’adresse e-mail n’est pas valide.</p>
      }
    </div>

    <!-- Mot de passe -->
    <label for="password" class="block text-sm text-foreground mt-4 mb-2 pl-1"
      >Mot de passe<span class="text-destructive flex-col justify-start pl-1">*</span></label
    >
    <div class="relative">
      <div class="flex items-center input" [class.border-destructive]="invalidSaisie('password')">
        <span class="pl-3 flex items-center">
          <svg class="size-6 text-foreground">
            <use href="assets/icons/sprite.svg#i-lock"></use>
          </svg>
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
          <svg class="size-6 text-foreground" aria-label="eye close">
            <use href="assets/icons/sprite.svg#i-eye-close"></use>
          </svg>
          } @else {
          <svg class="size-6 text-foreground" aria-label="eye open">
            <use href="assets/icons/sprite.svg#i-eye-open"></use>
          </svg>
          }
        </button>
      </div>
      @if (invalidSaisie('password', 'required')) {
      <p class="pl-1 mt-1 text-xs text-destructive">Ce champ est obligatoire.</p>
      }
    </div>

    <!-- Lien oublié -->
    <div class="text-right my-8">
      <a
        class="text-sm text-muted-foreground hover:underline hover:underline-offset-5 cursor-pointer font-medium"
        href="#"
        >Mot de passe oublié ?</a
      >
    </div>

    <!-- CTA -->
    <button
      aria-label="Se connecter"
      type="submit"
      class="w-full h-9 text-sm rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-95 active:opacity-90 transition inline-flex items-center justify-center gap-2 cursor-pointer"
    >
      Se connecter
      <svg class="size-4 text-primary-foreground">
        <use href="assets/icons/sprite.svg#i-row-right"></use>
      </svg>
    </button>
  </form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  protected readonly toast = inject(ToastrService);
  protected readonly fb = inject(NonNullableFormBuilder);
  protected readonly router = inject(Router);
  protected readonly service = inject(AuthService);

  readonly typePasswordInput = input.required();
  readonly typePasswordChanges = output<'password' | 'text'>();

  protected readonly formLogin = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required]),
  });

  protected invalidSaisie(controlName: string, errorType?: string): boolean {
    const control = this.formLogin.get(controlName);
    if (!control) return false;
    if (errorType) {
      return control.hasError(errorType) && control.touched;
    }
    return control.invalid && control.touched;
  }

  protected async onSubmit() {
    const user = this.formLogin.getRawValue();

    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      this.toast.error('Formulaire invalide');
      return;
    }

    try {
      await this.service.signIn(user);
      this.toast.success('Connexion réussie');
      await this.router.navigate(['dashboard']);
      this.formLogin.reset();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Email ou mot de passe incorrect';
      this.toast.error(errorMessage);
    }
  }
}
