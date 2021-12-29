import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthServices} from '../../services/auth.services';

@Component({
  selector: 'mua-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthServices,
  ) {
  }

  ngOnInit(): void {
    console.log(+new Date());
  }

  logout($event: Event) {

    event?.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login']).then(r => r);
  }
}
