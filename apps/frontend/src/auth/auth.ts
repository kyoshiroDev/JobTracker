import { FormControl } from '@angular/forms';

export interface Auth {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthForm {
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}
