import {Component} from '@angular/core';
import {state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
  animations: [
    trigger('boxTrig', [
      state('start', style({
        background: 'blue'
      })),
      state('end', style({
        background: 'red',
        transform: 'scale(1.5)'
      })),
      // transition()
    ])
  ]
})

export class MuaComponent {
  boxState = 'start';

  boxStart() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  boxEnd() {
    this.boxState = this.boxState === 'start' ? 'end' : 'start';
  }
}



