import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})
export class MuaComponent {
  posts: Post[] = [
    {title: 'Хочу понюхать пятку', text: 'Пяточная сила, логического мыла', id: 0},
    {title: 'ХWhy', text: 'An efficient under load and happy use', id: 1},
    {title: 'highest number', text: 'you are serving the highest number of requests'},
    {title: 'we know, it', text: 'work highly focused on providing the best developer', id: 3},
  ];

  updateFormPosts(post: Post) {
    this.posts.unshift(post);
  }
}











