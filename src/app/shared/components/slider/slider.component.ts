import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces';
import { Observable } from 'rxjs';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'mua-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  sliceStart: number = 0;
  sliceEnd: number = 3;
  postsArr: Post[] = [];
  posts$: Observable<Post[]> | undefined;

  constructor(
    private _postsService: PostsService
  ) { }

  ngOnInit() {
    this.posts$ = this._postsService.allPosts;
    this._postsService.allPosts
      .subscribe(posts => {
        this.postsArr = [...posts];
      })
  }

  clickLeft() {
    this.postsArr.slice(this.sliceStart--, this.sliceEnd--);
  }

  clickRight() {
    this.postsArr.slice(this.sliceStart++, this.sliceEnd++);
  }
}
