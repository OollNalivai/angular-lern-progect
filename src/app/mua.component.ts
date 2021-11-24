import {Component} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})

export class MuaComponent {
  constructor(public auth: AuthService) {}
}

