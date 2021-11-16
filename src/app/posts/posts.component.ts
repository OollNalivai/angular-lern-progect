import {Component} from '@angular/core';
import {PostsService} from '../posts.service';

@Component({
  selector: 'mua-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  constructor(public postsService: PostsService) {}
}
