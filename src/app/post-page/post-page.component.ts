import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/posts.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../shared/interfaces';

@Component({
  selector: 'mua-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  #currentAssessment: number | undefined; // последняя оценка
  #postId: string | undefined;
  #scoreArray: number[] | undefined = [];
  currentPost: Observable<Post> | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _postsService: PostsService,
  ) {
  }

  ngOnInit(): void {
    this.currentPost = this._route.params.pipe(switchMap((params) => {
      return this._postsService.getById(params['id']);
    }));

    this.currentPost?.subscribe((post: Post) => {
      this.#postId = post.id;

      if (post.scoreArray) {
        this.#scoreArray = post.scoreArray;
      }
    });
  }

  setRatingValue(evt: MouseEvent): void {
    const target = evt.target as HTMLInputElement;
    this.#currentAssessment = +target.value;

    if (this.#scoreArray) {
      this.#scoreArray = [...this.#scoreArray, this.#currentAssessment];
    }

    this._postsService.updateRating(
      {
        id: this.#postId,
        scoreArray: this.#scoreArray
      }
    )

  }

  calculatingRating(numberOfRatings: number, scoreArray: number[]) {
    // this.ratingStar = scoreArray
    //   .reduce((acc, curr) => acc + curr) / ++numberOfRatings;
    // this.numberOfRatings = numberOfRatings;
  }

  getRating(value: number): void {
    // let ratingActive = document.querySelector('.rating__active') as HTMLElement;
    // ratingActive.style.width = `${value / 5 * 100}%`;
  }

  async test() {
    try {
      await this._postsService.updateRating({
        id: this.#postId,
        scoreArray: this.#scoreArray
      }).toPromise();
    } catch (e) {
      console.log(e);
    }
  }

}
