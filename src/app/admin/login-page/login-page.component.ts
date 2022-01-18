import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/interfaces';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthServices } from '../shared/services/auth.services';
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
    private auth: AuthServices,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }


  get authErrors(): Observable<string> {
    return this.auth.error$;
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params: Params) => {

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

  submit() {

    console.log(this.form);

    if (this.form?.invalid) {
      return;
    }

    this.submitted = true;

    const user: User = {
      email: this.form?.value.email,
      password: this.form?.value.password,
    };

    console.log(user);

    this.auth.login(user).subscribe(() => {

        this.form?.reset();
        this.router.navigate(['/admin', 'dashboard']);
        this.submitted = false;
      },
      () => {
        this.submitted = false;
      });
  }
}
