import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';

import {FbAuthResponse, IUser} from '../../../shared/interfaces';
import {environment} from '../../../../environments/environment';
import {catchError, tap} from 'rxjs/operators';

@Injectable()

export class AuthServices {

  error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  get token(): string | null {
    const expData = new Date(localStorage.getItem('fb-token-exp') || '');

    if (new Date() > expData) {
      this.logout();

      return null;
    }

    return localStorage.getItem('fb-token');
  }

  private static setToken(response: FbAuthResponse | null): void {

    if (response) {
      console.log(response);
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);

      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());

    } else {
      localStorage.clear();
    }
  }

  private handleError(error: HttpErrorResponse) {

    const {message} = error.error.error;

    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Invalid Email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Invalid Password');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Email not found');
        break;
    }

    return throwError(error);
  }
  /* TODO: изменить тип */
  login(user: IUser): Observable<FbAuthResponse | null> {
    user.returnSecureToken = true;

    return this.http
      .post<FbAuthResponse | null>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(AuthServices.setToken),
        catchError(this.handleError.bind(this)),
      );
  }

  logout() {
    AuthServices.setToken(null);
  }

  isAuthenticated(): boolean {

    return !!this.token;
  }
}
