import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../shared/posts.service';
import { Subscription, switchMap } from 'rxjs';
import { Post } from '../../shared/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mua-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  _subscriptions$: Subscription = new Subscription();
  form: FormGroup | undefined;
  post: Post | undefined;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {
  }

  ngOnInit() {
    this.route.params.pipe(switchMap((params) => {
          return this.postsService.getById(params['id']);
        })
      )

      .subscribe((post: Post) => {
      this.post = post;
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        text: new FormControl(post.text, Validators.required)
      });

    });
  }

  submit() {
    if (this.form?.invalid) {
      return;
    }

    this.submitted = true;

    this._subscriptions$.add(

      this.postsService.update({
        id: this.post?.id,
        text: this.form?.value.text,
        title: this.form?.value.title,
      })

        .subscribe(() => {
        this.submitted = false;
      })
    );

  }

  ngOnDestroy(): void {
    this._subscriptions$.unsubscribe();
  }
}
