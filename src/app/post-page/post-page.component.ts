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

  #postId: string | undefined;
  #scoreArray: number[] | undefined = [];
  currentAssessment: number | undefined; // последняя оценка
  starRating: number | undefined;
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

  setRatingValue(evt: MouseEvent, post: Post): void {
    const target = evt.target as HTMLInputElement;

    this._postsService.updateRating(
      {
        ...post,
        scoreArray: [...post.scoreArray || [], +target.value]
      }
    ).subscribe((scoreArray: number[]) => {
      post.scoreArray = scoreArray;


      this.starRating = post.scoreArray
        .reduce((acc, curr) => acc + curr) / post?.scoreArray.length;
    })

    this.currentAssessment = +target.value;
  }

  async test() {
    // try {
    //   await this._postsService.updateRating({
    //     id: this.#postId,
    //     scoreArray: this.#scoreArray
    //   }).toPromise();
    // } catch (e) {
    //   console.log(e);
    // }
  }
}
