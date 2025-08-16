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
          (click)="toggleForm('signIn')"
          [class]="loginBtnClass()"
        >
          Connexion
        </button>
        <button
          type="button"
          (click)="toggleForm('signUp')"
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

  readonly switchFormChanges = output<'signIn' | 'signUp'>();

  toggleForm(form: 'signIn' | 'signUp') {
    this.switchFormChanges.emit(form);
  }
}
