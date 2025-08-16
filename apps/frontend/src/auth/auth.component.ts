import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { SignInComponent } from './signIn.component';
import { SignUpComponent } from './signUp.component';
import { AuthHeaderComponent } from './components/auth-header.component';
import { AuthFooterComponent } from './components/auth-footer.component';
import { AuthToggleFormComponent } from './components/auth-toggle-form.component';

@Component({
  selector: 'fdw-auth',
  standalone: true,
  imports: [
    SignInComponent,
    SignUpComponent,
    AuthHeaderComponent,
    AuthFooterComponent,
    AuthToggleFormComponent,
  ],
  host: {
    class:
      'flex flex-col justify-center items-center min-h-dvh p-4 bg-gradient-to-br from-jobtracker-background via-jobtracker-background',
  },
  template: `
    <fdw-auth-header />
    <section class="w-full max-w-md">
      <div
        class="bg-white rounded-2xl border border-jobtracker-border shadow-sm"
      >
        <fdw-auth-toggle-form
          (switchFormChanges)="switchForm($event)"
          [formAuth]="formAuth()"
          [loginBtnClass]="loginBtnClass()"
          [registerBtnClass]="registerBtnClass()"
        />

        @if (formAuth() === 'signIn') {
        <div class="animate-fade-slide">
          <fdw-auth-signIn
            (typePasswordChanges)="switchTypePassword($event)"
            [typePasswordInput]="typePassword()"
          />
        </div>
        } @else {
        <div class="animate-fade-slide">
          <fdw-auth-signUp
            (typePasswordChanges)="switchTypePassword($event)"
            (typeConfirmPasswordChanges)="switchTypeConfirmPassword($event)"
            [typePasswordInput]="typePassword()"
            [typeConfirmPasswordInput]="typeConfirmPassword()"
          />
        </div>
        }
      </div>
    </section>
    <fdw-auth-footer />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  protected readonly typePassword = signal<string>('password');
  protected readonly typeConfirmPassword = signal<string>('password');
  protected readonly formAuth = signal<'signIn' | 'signUp'>('signIn');

  protected readonly loginBtnClass = computed(() =>
    this.formAuth() === 'signIn'
      ? 'h-10 rounded-md text-sm font-medium transition shadow-sm bg-jobtracker-primary text-white cursor-default transition'
      : 'h-10 rounded-md text-sm font-medium text-jobtracker-text-secondary hover:bg-white/60 transition cursor-pointer transition'
  );

  protected readonly registerBtnClass = computed(() =>
    this.formAuth() === 'signUp'
      ? 'h-10 rounded-md text-sm font-medium transition shadow-sm bg-jobtracker-primary text-white cursor-default transition'
      : 'h-10 rounded-md text-sm font-medium text-jobtracker-text-secondary hover:bg-white/60 transition cursor-pointer transition'
  );

  protected switchForm($event: 'signIn' | 'signUp'): void {
    this.formAuth.set($event);
  }

  protected switchTypePassword($event: 'password' | 'text'): void {
    if (this.typePassword() === 'password') {
      this.typePassword.set($event);
    } else {
      this.typePassword.set('password');
    }
  }

  protected switchTypeConfirmPassword($event: 'password' | 'text'): void {
    if (this.typeConfirmPassword() === 'password') {
      this.typeConfirmPassword.set($event);
    } else {
      this.typeConfirmPassword.set('password');
    }
  }
}
