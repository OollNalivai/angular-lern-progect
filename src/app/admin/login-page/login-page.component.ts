import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/interfaces';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mua-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})

export class LoginPageComponent implements OnInit {

  form: FormGroup | undefined;
  submitted = false;
  massage: string | undefined;

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
  }

  get authErrors(): Observable<string> {
    return this._auth.error$;
  }

  ngOnInit() {

    this._route.queryParams.subscribe((params: Params) => {

      if (params['loginAgain']) {
        this.massage = 'Please, log in';
      }
      if (params['authFailed']) {
        this.massage = 'Session has expired. Log in again.';
      }
    });

    this.form = new FormGroup({

      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),

      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit(): void {
    if (this.form?.invalid) {
      return;
    }

    this.submitted = true;

    const user: User = {
      email: this.form?.value.email,
      password: this.form?.value.password,
    };

    this._auth.login(user).subscribe(
      (): void => {
        this.form?.reset();
        this._router.navigate(['/admin', 'dashboard']).then(r => r);
        this.submitted = false;
      },
      (): void => {
        this.submitted = false;
      });
  }
}
