import {Component} from '@angular/core';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})
export class MuaComponent {
  e: number = Math.E;
  str = 'Hello world';
  date: Date = new Date();
  float = 0.42;
  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
      }
    }
  };
}
