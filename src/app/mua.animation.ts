import {animate, group, keyframes, query, state, style, transition, trigger} from '@angular/animations';

export const boxAnimation = trigger('myAnimationTrigger', [
  state('start', style({
    backgroundColor: 'black'
  })),
  state('end', style({
    backgroundColor: 'red',
    fontSize: '24px'
  })),
  transition('start => end', animate(500)),
  transition('end => start', animate(500)),
  transition(':enter', [
    animate('4s', keyframes([
      style({backgroundColor: 'red', marginLeft: '700px', offset: 0}),
      style({backgroundColor: 'orange', marginLeft: '300px', offset: 0.3}),
      style({backgroundColor: 'black', marginLeft: '200px', offset: 0.5}),
      style({backgroundColor: 'blue', marginLeft: 0, offset: 1}),
    ])),
  ]),
  transition(':leave', [
    style({opacity: 1}),
    group([
      animate('4s', keyframes([
        style({backgroundColor: 'red', marginLeft: 0, offset: 0}),
        style({backgroundColor: 'orange', marginLeft: '200px', offset: 0.3}),
        style({backgroundColor: 'black', marginLeft: '300px', offset: 0.5}),
        style({backgroundColor: 'blue', marginLeft: '700px', offset: 1}),
      ])),
      animate(800, style({
        fontSize: '28px',
      })),
    ]),
  ]),
]);
