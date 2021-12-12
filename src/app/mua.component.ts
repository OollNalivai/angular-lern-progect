import {Component} from '@angular/core';
import {animate, group, keyframes, query, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
  animations: [
    trigger('boxTrig', [
      state('start', style({
        backgroundColor: 'blue',
      })),
      state('end', style({
        backgroundColor: 'red',
        transform: 'scale(1.2)',
      })),
      state('special', style({
        backgroundColor: 'black',
        transform: 'scale(0.8)',
        borderRadius: '50%',
      })),
      transition('start => end', animate(400)),
      transition('end => start', animate('800ms ease-in-out')),
      transition('special <=> *', [
        group([
          query('h4', animate(1500,
            style({
              fontSize: '2.5rem',
              color: 'red',
            }))),
          style({background: 'green'}),
          animate('0.5s',
            style({
              backgroundColor: 'pink',
            }),
          ),
          animate(950),
        ]),
      ]),
      // void => *
      transition(':enter', [
        animate('4s', keyframes([
          style({backgroundColor: 'red', offset: 0}),
          style({backgroundColor: 'orange', offset: 0.2}),
          style({backgroundColor: 'black', offset: 0.3}),
          style({backgroundColor: 'blue', offset: 1})
        ]))
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
            fontSize: '28px',
          })),
        ]),
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



