import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse, CreateUser } from '@libs/schemas-zod';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _http = inject(HttpClient);
  private readonly _apiUrl = 'https://jobtracker-1-h6qf.onrender.com';

  private readonly _userSession = new BehaviorSubject<AuthResponse>({} as AuthResponse);

  public readonly userSession: Observable<AuthResponse> = this._userSession.asObservable();

  register(user: CreateUser): Observable<AuthResponse> {
    return this._http
      .post<AuthResponse>(`${this._apiUrl}/auth/register`, user)
      .pipe(
        map((response) => {
          this._userSession.next(response);
          return response;
        }),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }
}
