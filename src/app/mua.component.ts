import {Component} from '@angular/core';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})

export class MuaComponent {
  muaState = 'on';

  handleChange() {
    console.log(this.muaState);
  }
}

