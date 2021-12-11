import {Component} from '@angular/core';
import {animate, group, state, style, transition, trigger} from '@angular/animations';

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
        transform: 'scale(1.2)',
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
      // void => *
      transition(':enter', [
        style({opacity: 0}),
        animate('800ms ease-out'),
      ]),
      // * => void
      transition(':leave', [
        style({opacity: 1}),
        group([
          animate(850, style({
            opacity: 0,
            transform: 'scale(1.4)',
          })),
          animate(460, style({
            color: '#000',
            fontSize: '28px'
          }))
        ])
      ]),
    ]),
  ],
})

export class MuaComponent {
  boxState = 'start';
  visible = true;

  boxStart() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  boxEnd() {
    this.boxState = this.boxState === 'start' ? 'end' : 'start';
  }
}



