import { Component } from '@angular/core';
import {MuaCounterService} from '../services/mua-counter.service';
import {LocalCounterService} from '../services/local-counter.service';

@Component({
  selector: 'mua-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [LocalCounterService]
})
export class CounterComponent {

  constructor(
    public muaCounterService: MuaCounterService,
    public localCounterService: LocalCounterService
  ) {}

}
