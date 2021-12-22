import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../../../shared/interfaces';
import {Observable} from 'rxjs';

@Injectable()

export class AuthServices {
  constructor(private http: HttpClient) {
  }

  get token(): string {
    return '';
  }

  login(user: IUser): Observable<any> {
    return this.http.post('', user);

  }

  logout() {

  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken() {

  }
}
