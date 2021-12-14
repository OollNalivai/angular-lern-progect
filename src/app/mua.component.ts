import {Component} from '@angular/core';
import {boxAnimation} from './mua.animation';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
  animations: [boxAnimation],
})

export class MuaComponent {
  myStatusExp = 'start';
  log = '';
  visible = true;

  boxStart() {
    this.myStatusExp = this.myStatusExp === 'end' ? 'start' : 'end';
  }

  boxEnd() {
    this.myStatusExp = this.myStatusExp === 'start' ? 'end' : 'start';
  }
}



