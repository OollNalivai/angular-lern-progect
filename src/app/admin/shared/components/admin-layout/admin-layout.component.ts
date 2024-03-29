import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'mua-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {

  constructor(
    public auth: AuthService,
    private _router: Router
  ) {
  }

  logout($event: Event) {

    $event?.preventDefault();
    this.auth.logout();
    this._router.navigate(['/admin', 'login']).then(r => r);
  }
}
