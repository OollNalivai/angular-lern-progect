import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServices } from '../admin/shared/services/auth.services';
import { Router } from '@angular/router';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthServices,
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.auth.isAuth) {
      req = req.clone({
        setParams: {
          auth: this.auth.token!
        }
      })
    }
    return next.handle(req);
  }

}
