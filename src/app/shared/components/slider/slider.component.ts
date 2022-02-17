import { AfterContentChecked, Component, OnInit } from '@angular/core';
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
  public posts$: Observable<Post[]> | undefined;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.allPosts;
    this.postsService.allPosts
      .subscribe(posts => {
        this.postsArr = [...posts];
        console.log(posts, 'posts');
      })
  }

  clickLeft() {
    this.postsArr.slice(this.sliceStart--, this.sliceEnd--);
  }

  clickRight() {
    this.postsArr.slice(this.sliceStart++, this.sliceEnd++);
  }
}
