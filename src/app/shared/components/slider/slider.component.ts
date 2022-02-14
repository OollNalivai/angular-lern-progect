import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces';
import { Observable } from 'rxjs';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'mua-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @Input() post!: Post;

  array = [1111111, 2222222, 3333333, 4444444, 5555555, 6666666, 7777777];
  start: number = 0;
  end: number = 3;
  sliderItem = document.getElementsByClassName('slider__item');
  btnLeft = document.getElementsByClassName('left');
  btnRight = document.getElementsByClassName('right');

  public posts$: Observable<Post[]> | undefined;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.allPosts;
  }

  clickLeft() {
    this.array.slice(this.start--, this.end--);
  }

  clickRight() {
    this.array.slice(this.start++, this.end++);
    console.log(this.sliderItem)
  }
}
