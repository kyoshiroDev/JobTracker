import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'fdw-auth-toggle-form',
  template: `
    <div class="px-5 pt-5">
      <div class="bg-jobtracker-bg-gray rounded-md p-1 grid grid-cols-2 gap-1">
        <button
          type="button"
          (click)="toggleForm('login')"
          [class]="loginBtnClass()"
        >
          Connexion
        </button>
        <button
          type="button"
          (click)="toggleForm('register')"
          [class]="registerBtnClass()"
        >
          Inscription
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthToggleFormComponent {
  readonly formAuth = input.required();
  readonly loginBtnClass = input.required();
  readonly registerBtnClass = input.required();

  readonly switchFormChanges = output<'login' | 'register'>();

  toggleForm(form: 'login' | 'register') {
    this.switchFormChanges.emit(form);
  }
}
