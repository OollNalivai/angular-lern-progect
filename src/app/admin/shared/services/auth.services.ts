import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {FbAuthResponse, IUser} from '../../../shared/interfaces';
import {environment} from '../../../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable()

export class AuthServices {

  constructor(private http: HttpClient) {
  }

  get token(): string | null {
    const expData = new Date(localStorage.getItem('fb-token-exp') as string);
    if (new Date() > expData) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }

  login(user: IUser): Observable<any> {
    user.returnSecureToken = true;
    return this.http
      .post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken) as any,
      );

  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: FbAuthResponse | null): void {
    if (response) {
      console.log(response);
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }

  }
}
