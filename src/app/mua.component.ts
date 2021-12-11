import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
  animations: [
    trigger('boxTrig', [
      state('start', style({
        background: 'blue',
      })),
      state('end', style({
        background: 'red',
        transform: 'scale(1.5)',
      })),
      state('special', style({
        background: 'black',
        transform: 'scale(0.4)',
        borderRadius: '50%',
      })),
      transition('start => end', animate(400)),
      transition('end => start', animate('800ms ease-in-out')),
      transition('special <=> *', [
        style({background: 'green'}),
        animate('0.5s',
          style({
            background: 'pink',
          }),
        ),
        animate(750),
      ]),
    ]),
  ],
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



