import {Component} from '@angular/core';
import {boxAnimation} from './mua.animation';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
  animations: [boxAnimation],
})

export class MuaComponent {
  boxState = 'start';
  log = '';
  visible = true;

  boxStart() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  boxEnd() {
    this.boxState = this.boxState === 'start' ? 'end' : 'start';
  }

  animationStart(event: any) {
    console.log('animationStart', event.phaseName);
  }

  animationDone(event: any) {
    console.log('animationDone', event.phaseName);
  }
}



