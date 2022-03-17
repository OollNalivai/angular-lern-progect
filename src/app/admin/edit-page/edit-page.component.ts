import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../shared/posts.service';
import { Subscription, switchMap } from 'rxjs';
import { Post } from '../../shared/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'mua-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  public form: FormGroup | undefined;
  public submitted = false;
  private _subscriptions$: Subscription = new Subscription();
  private _post: Post | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _postsService: PostsService,
    private _alertService: AlertService
  ) {
  }

  ngOnInit() {
    this._route.params.pipe(switchMap((params) => {
        return this._postsService.getById(params['id']);
      })
    )

      .subscribe((post: Post) => {
        this._post = post;
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
      this._postsService.update({
        id: this._post?.id,
        text: this.form?.value.text,
        title: this.form?.value.title,
      })

        .subscribe(() => {
          this.submitted = false;
          this._alertService.alertMessage('success', 'Post was updated');
          this._router.navigate(['/admin', 'dashboard']).then(r => r);
        })
    );
  }

  ngOnDestroy(): void {
    this._subscriptions$.unsubscribe();
  }
}
