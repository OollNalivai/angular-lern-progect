import {Component} from '@angular/core';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})
export class MuaComponent {
  title = '';
  backgroundToggle = false;
  styleNg = {width: '100px', height: '100px', background: '#444'};
  onToggleStyle() {
    this.styleNg.background = this.backgroundToggle ? '#444' : '#ff3';
    return this.backgroundToggle = !this.backgroundToggle;
  }
}
