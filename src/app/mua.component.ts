import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

interface IMap<T = any> {
  [key: string]: T;
}

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})
export class MuaComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  get emailCtrl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get passwordCtrl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get cityCtrl(): FormControl {
    return this.form.get('address.city') as FormControl;
  }

  get skillsCtrl(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  ngOnInit() {
    this._initForm();
  }

  private _initForm(): void {
    this.form = this.fb.group({
      email: this.fb.control('hui@zalupa',
        [Validators.email,
          Validators.required]),
      password: this.fb.control('asdasdasdA',
        [Validators.required,
          Validators.minLength(6),
          Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])/g)]),
      address: this.fb.group({
        country: this.fb.control('by'),
        city: this.fb.control('Усть-Пистинск',
          Validators.required),
      }),
      skills: this.fb.array(['asd', 'das']),
      // skills: new FormGroup({
      //   skillsArr: new FormArray([])
      // })
    });
  }

  submit() {
    console.log(this.form);
    const formValues = {...this.form.value};
    console.log('Form Value: ', formValues);
  }

  setCapital() {
    const cityMap: IMap<string> = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск',
    };
    const city = cityMap[this.form.get('address.country')?.value];

    this.form.patchValue({address: {city}});
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    this.skillsCtrl.push(control);
  }
}

