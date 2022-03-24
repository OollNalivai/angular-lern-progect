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

  post$: Observable<Post> | undefined;
  rating: number = 50;

  constructor (
    private _route: ActivatedRoute,
    private _postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.post$ = this._route.params.pipe(switchMap((params) => {
        return this._postsService.getById(params['id']);
      })
    );
  }

  inputChange(evt: any): void {
    let stars = document.querySelector(".stars") as HTMLElement;
    let percentRatingColoring: number;

    this.rating = evt.value / 5 * 100;
    percentRatingColoring = this.rating;
      stars.style.background =
      `linear-gradient(to right, yellow 0 ${percentRatingColoring}%, white ${percentRatingColoring}% 100%)`;


    console.log(evt.value)
    console.log(this.rating)
  }
}
