import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IPost} from '../../shared/interfaces';

@Component({
  selector: 'mua-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
})
export class CreatePageComponent implements OnInit {

  form: FormGroup | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
    });
  }

  submit() {
    console.log(this.form);

    if (this.form?.invalid) {
      return;
    }

    const post: IPost = {
      title: this.form?.value.title,
      text: this.form?.value.text,
      author: this.form?.value.author,
      date: new Date(),
    };

    console.log(post);
  }

}
