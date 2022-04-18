import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Post } from '../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'mua-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  #postId: string | undefined;
  #scoreArray: number[] | undefined = [];
  currentAssessment: number = 0; // последняя оценка
  currentPost: Observable<Post> | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _postsService: PostsService,
  ) {
  }

  ngOnInit() {
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

  setRatingValue(evt: MouseEvent, post: Post): void {
    const target = evt.target as HTMLInputElement;

    this._postsService.updateRating(
      {
        ...post,
        scoreArray: [...post.scoreArray || [], +target.value]
      }
    ).subscribe((scoreArray: number[]) => {
      post.scoreArray = scoreArray;
    });

    this.currentAssessment = +target.value;
  }

}
