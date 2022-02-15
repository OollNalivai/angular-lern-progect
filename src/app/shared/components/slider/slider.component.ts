import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces';
import { delay, Observable, skipWhile } from 'rxjs';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'mua-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterContentChecked {

  sliceStart: number = 0;
  sliceEnd: number = 3;
  sliderItem = document.getElementsByClassName('slider__item');
  btnLeft = document.getElementsByClassName('left');
  btnRight = document.getElementsByClassName('right');
  postsArr: any[] = [];

  public posts$: Observable<Post[]> | undefined;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.allPosts;
    this.postsService.allPosts
      .pipe(skipWhile((posts: Post[]) => !posts.length))
      .subscribe(posts => {
        console.log(posts, 'posts');
        this.postsArr = [...posts];
    })
    console.log(this.postsArr, 'this.posts');
  }

  ngAfterContentChecked(): void {
    console.log(this.postsArr, 'this.posts');
  }

  clickLeft() {
    this.postsArr.slice(this.sliceStart--, this.sliceEnd--);
  }

  clickRight() {
    this.postsArr.slice(this.sliceStart++, this.sliceEnd++);
  }
}
