import { Component } from '@angular/core';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss']
})
export class MuaComponent {



  img = 'https://i.pinimg.com/originals/f5/da/fe/f5dafe5e555040a59555ee33c51a3ab3.jpg';

  constructor() {
    setTimeout(() => {
      console.log('timeout inover');
      this.img = 'https://alimero.ru/uploads/images/18/76/55/2019/08/19/ba945b.jpg';
    }, 3000);
  }
}
