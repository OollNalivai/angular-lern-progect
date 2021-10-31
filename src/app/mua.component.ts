import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})
export class MuaComponent implements OnInit {
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',
        [Validators.email,
          Validators.required]),
      password: new FormControl(null,
        [Validators.required,
          Validators.minLength(6),
          Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])/g)]),
    });
  }

  submit() {
    console.log(this.form);
    const formValues = {...this.form.value};
    console.log('Form Value: ', formValues);
  }
}

