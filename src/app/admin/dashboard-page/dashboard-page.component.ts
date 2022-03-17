import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { PostsService } from '../../shared/posts.service';
import { Post } from '../../shared/interfaces';
import { Subscription } from 'rxjs';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'mua-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  public posts: Post[] = [];
  public searchStr = '';
  private _subscriptions$: Subscription = new Subscription();

  constructor(private _postsService: PostsService,
              private _auth: AuthService,
              private _alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this._subscriptions$.add(this._postsService.allPosts.subscribe(posts => {
      this.posts = posts;
    }));
  }

  remove(id: string) {
    this._subscriptions$.add(this._postsService.remove(id).subscribe(() => {
      this.posts = this.posts?.filter(post => post.id !== id);
      this._alertService.alertMessage('warning','Post was deleted');
    }));
  }

  ngOnDestroy(): void {
    this._subscriptions$.unsubscribe();
  }
}
