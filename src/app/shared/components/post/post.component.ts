import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces';

@Component({
  selector: 'mua-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() post!: Post;

}
