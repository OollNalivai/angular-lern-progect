import {Component} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})
export class MuaComponent {

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 4000);
  });

  date: Observable<Date> = new Observable(obj => {
    setInterval(() => {
      obj.next(new Date());
    }, 1000);
  });

}
