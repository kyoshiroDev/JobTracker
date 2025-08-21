import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '@libs/interface';
import { CreateUser } from '@libs/schemas-zod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _http = inject(HttpClient);
  private readonly _apiUrl = 'https://jobtracker-1-h6qf.onrender.com';

  register(user: CreateUser) {
    return this._http.post<Auth>(`${this._apiUrl}/auth/register`, user);
  }
}
