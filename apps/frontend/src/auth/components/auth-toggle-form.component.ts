import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';

@Component({
  selector: 'fdw-auth-toggle-form',
  template: `
    <div class="px-5 pt-5">
      <div
        class="bg-jobtracker-bg-gray rounded-md p-1 grid grid-cols-2 gap-1"
      >
        <button
          type="button"
          (click)="onChangeSignInBtnForm.emit()"
          [class]="loginBtnClass()"
        >
          Connexion
        </button>
        <button
          type="button"
          (click)="onChangeSignUpBtnForm.emit()"
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

  readonly formAuth = input.required()
  readonly loginBtnClass = input.required()
  readonly registerBtnClass = input.required()

  readonly onChangeSignUpBtnForm = output()
  readonly onChangeSignInBtnForm = output()

}
