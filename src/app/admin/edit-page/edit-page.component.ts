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
  private post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private alertService: AlertService
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
          this.alertService.alertMessage('success', 'Post was updated');
          this.router.navigate(['/admin', 'dashboard']).then(r => r);
        })
    );
  }

  ngOnDestroy(): void {
    this._subscriptions$.unsubscribe();
  }
}
