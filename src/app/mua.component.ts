import {Component} from '@angular/core';
import {LogTypeService} from './services/log-type.service';
import {CounterService} from './services/counter.service';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
  providers: [CounterService]
})
export class MuaComponent {

  a = 45;
  b = {
    k: 23,
    kl: '321',
  };
  c = true;
  d: number[] = [3, 3, 5, 1, 5, 74];

  constructor(public logTypeService: LogTypeService,
              public  counterService: CounterService) {
  }

}
