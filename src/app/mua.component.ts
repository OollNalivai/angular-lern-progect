import {Component} from '@angular/core';
import {state, style, trigger} from '@angular/animations';

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
        background: 'blue',
        transform: 'scale{1.5}'
      }))
    ])
  ]
})

export class MuaComponent {
  boxState = 'start';

}



