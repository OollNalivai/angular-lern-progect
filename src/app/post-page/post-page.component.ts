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

  currentPost: Observable<Post> | undefined;
  #post: Post = {author: '', date: new Date, text: '', title: '', rating:
      {numberOfRatings: 2, scoreArray: []}};

  constructor(
    private _route: ActivatedRoute,
    private _postsService: PostsService,
  ) {
  }

  ngOnInit(): void {
    this.currentPost = this._route.params.pipe(switchMap((params) => {
        return this._postsService.getById(params['id']);
      })
    );

    this._route.params.pipe(switchMap((params) => {
        return this._postsService.getById(params['id']);
      })
    ).subscribe((post: Post) => {
      this.#post = post;
      // console.log(this.#post);
    });
  }

  getRatingValue(evt: MouseEvent): void {
    const target = evt.target as HTMLInputElement;

    //   ...this.#post, rating {
    //     'averageRating': 5, // средний рейтинг
    //     'numberOfRatings': 42, // количество оценок
    //     'scoreArray': [52, 54, 32], // массив оценок
    //   }

    console.log();


    let stars = document.querySelector('.stars') as HTMLElement;
    let ratingActive = document.querySelector('.rating__active') as HTMLElement;
    let percentRatingColoring: number = 0; // % заполенния звезды
    let currentAssessment: number = +target.value; // текущая оценка
    this.scoreArray.push(currentAssessment);
    this.rating = this.scoreArray
      .reduce((acc, curr) => acc + curr) / ++this.numberOfRatings;

    percentRatingColoring = this.rating / 5 * 100;
    ratingActive.style.width = `${percentRatingColoring}%`;

  }


  rating: number = 0;
  numberOfRatings: number = 0; // каунтер (сколько всего оценок) для подсчета среднего рейтинга поста
  scoreArray: number[] = []; // массив оценок
  postsArr: Post[] = [];


  async test() {
    try {
      await this._postsService.updateRating({
        ...this.#post,
        rating: {
          averageRating: 5, // средний рейтинг
          numberOfRatings: 42, // количество оценок
          scoreArray: [52, 54, 32], // массив оценок
        }
      }).toPromise();
    } catch (e) {
      console.log(e);
    }
  }


  inputChange(evt: any): void {

  }
}
