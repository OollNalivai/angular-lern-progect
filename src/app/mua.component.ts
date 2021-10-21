import {Component} from '@angular/core';


@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})
export class MuaComponent {

  myPromise = new Promise((resolve, reject) => {
    try {
      console.log('Выполнение асинхронной операции');
      getSomeWork();
      resolve('Hello world!');
    } catch (err) {
      reject(`Произошла ошибка: ${err.message}`);
    }
  }).catch(error => {
    console.log(error);
  });
}
