import {Component} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {map, filter, switchMap} from 'rxjs/operators';

// import {} from 'rxjs/operators';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})
export class MuaComponent {

  sub: Subscription;

  constructor() {

    const intervalStream$ = interval(2000);
    this.sub = intervalStream$
      .pipe(
        filter(value => value % 3 === 0 ),
        map((value) => `Mapped value ${value}`),
        switchMap(() => interval(1000))
      )
      .subscribe(value => {
      console.log(value);
    });
  }

  stop() {
    this.sub.unsubscribe();
  }

}
