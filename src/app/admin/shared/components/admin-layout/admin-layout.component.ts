import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginPageComponent} from '../../../login-page/login-page.component';

@Component({
  selector: 'mua-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout($event: Event) {
    event?.preventDefault();
    this.router.navigate(['/admin', 'login']).then(r => r);
  }
}
