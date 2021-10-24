import {Component} from '@angular/core';
import {MuaCounterService} from './services/mua-counter.service';
import {LocalCounterService} from './services/local-counter.service';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
  providers: [LocalCounterService]
})
export class MuaComponent {

  constructor(
    public muaCounterService: MuaCounterService,
    public localCounterService: LocalCounterService
  ) {}

}
