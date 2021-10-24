import {Component} from '@angular/core';
import {Subscription, Subject} from 'rxjs';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})
export class MuaComponent {

  sub: Subscription;

  stream$: Subject<number> = new Subject<number>();
  counter = 0;

  constructor() {
    this.sub = this.stream$.subscribe(value => {
      console.log('subscribe ', value);
    });
  }

  stop() {
    this.sub.unsubscribe();
  }

  next() {
    this.stream$.next(++this.counter);
  }

}
