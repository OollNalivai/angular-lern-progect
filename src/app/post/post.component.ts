import {Component} from '@angular/core';

@Component({
  selector: 'mua-post',
  template: `
    <h2>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus in laborum magnam neque nostrum quos rem sit
      tempore. Consectetur, in!
    </h2>
  `,
  styles: [`
    h2 {
      color: black;
      margin: 100px 30px;
      padding: 20px;
      border: 2px dotted black;
    }`],
})
export class PostComponent {
}
