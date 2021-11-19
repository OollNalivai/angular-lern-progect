import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'mua-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {
  }

  goToPostPages() {
    this.router.navigate(['/posts']).then(r => this.router);
  }
}
