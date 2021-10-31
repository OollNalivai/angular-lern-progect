import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})
export class MuaComponent implements OnInit {
  form!: FormGroup;
  // formControls = {
  //   a: this.form.get('email')?.invalid && this.form.get('email')?.touched,
  //   email: this.form.get('email'),
  //   password: this.form.get('password'),
  //   address: {
  //     country: this.form.get('address.country'),
  //     city: this.form.get('address.city'),
  //   },
  // };


  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',
        [Validators.email,
          Validators.required]),
      password: new FormControl(null,
        [Validators.required,
          Validators.minLength(6),
          Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])/g)]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('Усть-Пистинск',
          Validators.required),
      }),
    });
  }

  submit() {
    console.log(this.form);
    const formValues = {...this.form.value};
    console.log('Form Value: ', formValues);
  }
}

