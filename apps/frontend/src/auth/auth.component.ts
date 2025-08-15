import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { SignInComponent } from './signIn.component';
import { SignUpComponent } from './signUp.component';
import { AuthHeaderComponent } from './components/auth-header.component';
import { AuthFooterComponent } from './components/auth-footer.component';
import { AuthToggleFormComponent } from './components/auth-toggle-form.component';
import { AuthProvidersComponent } from './components/auth-providers.component';

@Component({
  selector: 'fdw-auth',
  standalone: true,
  imports: [
    SignInComponent,
    SignUpComponent,
    AuthHeaderComponent,
    AuthFooterComponent,
    AuthToggleFormComponent,
    AuthProvidersComponent,
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
          (onChangeSignUpBtnForm)="this.formAuth.set('signUp')"
          (onChangeSignInBtnForm)="this.formAuth.set('signIn')"
          [formAuth]="formAuth()"
          [loginBtnClass]="loginBtnClass()"
          [registerBtnClass]="registerBtnClass()"
        />

        @if (formAuth() === 'signIn') {
        <div class="animate-fade-slide">
          <fdw-auth-signIn />
        </div>
        } @else {
        <div class="animate-fade-slide">
          <fdw-auth-signUp />
        </div>
        } <fdw-auth-providers />
      </div>
    </section>
    <fdw-auth-footer />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
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
}
