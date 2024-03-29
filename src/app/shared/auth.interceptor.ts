import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHandler, HttpRequest, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../admin/shared/services/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private _auth: AuthService,
    private _router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this._auth.isAuth && this._auth.token) {
      req = req.clone({
        setParams: {
          auth: this._auth.token
        }
      });
    }
    // TODO: отловить ошибки аутентификации
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.warn(`[Interceptor Error]: `, error.message);

          if (error.status === 401) {
            this._auth.logout();
            this._router.navigate(['/admin', 'login'], {
              queryParams: {
                authFailed: true
              }
            }).then(r => r);
          }

          console.warn('я же говорил, ошибочка? Залогинься.')
          return throwError(() => error);
        })
      );
  }
}
