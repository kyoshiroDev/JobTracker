import { FormControl } from '@angular/forms';

export interface Auth {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthForm {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}
