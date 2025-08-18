import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '@libs/interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _http = inject(HttpClient);
  // Base URL of the backend (no trailing slash to avoid malformed URLs)
  private readonly _apiUrl = 'https://jobtracker-1-h6qf.onrender.com';

  // Helper to join URL parts safely with a single slash
  private buildUrl(...parts: string[]): string {
    return parts
      .filter(Boolean)
      .map((p, i) => (i === 0 ? p.replace(/\/$/, '') : p.replace(/^\/+|\/+$/g, '')))
      .join('/');
  }

  SignUp(formDataSignup: Pick<Auth, 'name' | 'email' | 'password'>) {
    const url = this.buildUrl(this._apiUrl, 'auth', 'signup');
    return this._http.post<Auth>(url, formDataSignup);
  }
}
