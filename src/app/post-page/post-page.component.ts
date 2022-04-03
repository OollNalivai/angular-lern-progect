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

  // #currentAssessment: number | undefined; // последняя оценка
  // #scoreArray: number[] | undefined = []; // массив оценок

  currentPost: Observable<Post> | undefined;
  // ratingStar: number | undefined = 0; // вывод среднего рейтинга в шаблон
  // numberOfRatings: number | undefined = 0; // сколько всего оценок

  constructor(
    private _route: ActivatedRoute,
    private _postsService: PostsService,
  ) {
  }

  ngOnInit(): void {
    this.currentPost = this._route.params.pipe(switchMap((params) => {
      return this._postsService.getById(params['id']);
    }));
  }

  getRatingValue(evt: MouseEvent): void {
    // const target = evt.target as HTMLInputElement;
    // this.#currentAssessment = +target.value;
    //
    // if (this.#scoreArray) {
    //   this.#scoreArray.push(this.#currentAssessment);
    // }
    //
    // if (this.ratingStar && this.numberOfRatings && this.#scoreArray) {
    //   this.calculatingRating(this.numberOfRatings, this.#scoreArray);
    //   this.getRating(this.ratingStar);
    // }
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

  // async test() {
  //   try {
  //     await this._postsService.updateRating({
  //       ...this.#post,
  //       rating: {
  //         averageRating: 5, // средний рейтинг
  //         numberOfRatings: 42, // количество оценок
  //         scoreArray: [52, 54, 32], // массив оценок
  //       }
  //     }).toPromise();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

}
