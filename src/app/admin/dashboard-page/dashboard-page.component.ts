import { Component, OnInit } from '@angular/core';
import {AuthServices} from '../shared/services/auth.services';

@Component({
  selector: 'mua-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(private auth: AuthServices) { }

  ngOnInit(): void {
  }

  test() {
    console.log(this.auth.token);
  }
}
