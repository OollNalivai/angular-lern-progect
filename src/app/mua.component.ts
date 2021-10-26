import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})
export class MuaComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl('',
      [Validators.email, Validators.required]),
    password: new FormControl('',
      [Validators.minLength(6), Validators.required]),
  });

  submit(): void {
    if (this.form.valid) {
      console.log(this.form);
      const formValues = {...this.form.value};
      console.log('Form Data: ', formValues);
    }
  }
}

