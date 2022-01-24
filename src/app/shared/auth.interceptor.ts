import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHandler, HttpRequest, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthServices } from '../admin/shared/services/auth.services';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthServices,
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuth && this.auth.token) {
      req = req.clone({
        setParams: {
          auth: this.auth.token
        }
      });
    }

    return next.handle(req)
      .pipe(
        tap(() => {
          console.log('Interceptor is working');
        }),
        catchError((error: HttpErrorResponse) => {
          console.log(`[Interceptor Error]: `, error);

          if (error.status === 401) {
            this.auth.logout();
            this.router.navigate(['/admin', 'login'], {
              queryParams: {
                authFailed: true
              }
            });
          }

          return throwError(() => error);
        })
      );
  }
}