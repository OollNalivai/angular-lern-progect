import {Component} from '@angular/core';

interface IObjectKeys {
  [key: string]: string;
}

export interface IPost extends IObjectKeys {
  title: string;
  text: string;
}

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})
export class MuaComponent {

  search = '';
  searchFild = 'title';

  posts: IPost[] = [
    {title: '111111', text: 'lorem1d0 ddsdas da sdas ds adasd'},
    {title: '222222', text: 'lorem1d0 222222 da sdas ds adasd'},
    {title: '333333', text: '333333 ddsdas da sdas ds adasd'},
    {title: '444444', text: 'lorem1d0 ddsdas da 444444 ds adasd'},
  ];

  addPost() {
    this.posts.unshift({
      title: 'Angular 8',
      text: 'Позвони и мы подбросим'
    });
  }

}
