import {Component} from '@angular/core';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})
export class MuaComponent {

  inputValue = '';

  constructor() {
  }

  onInput(event: KeyboardEvent | Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  onBlur(str: string) {
    this.inputValue = str;
  }

  onClick() {
    this.inputValue = '';
    console.log('Пожилая кнопка кликис');
    (document.getElementById('text') as HTMLInputElement).value = '';
  }

}
