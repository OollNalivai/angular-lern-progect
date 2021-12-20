import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../../shared/interfaces';

@Component({
  selector: 'mua-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  form: FormGroup | undefined;

  constructor() {
  }

  ngOnInit(): void {
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

    const user: IUser = {
      email: this.form?.value.email,
      password: this.form?.value.password,
    };

    console.log(user);

  }
}
