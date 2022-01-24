import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthServices } from '../shared/services/auth.services';
import { PostsService } from '../../shared/posts.service';
import { Post } from '../../shared/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mua-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  _subscriptions$: Subscription = new Subscription();
  posts: Post[] | undefined = [];
  searchStr = '';

  constructor(private postsService: PostsService,
              private auth: AuthServices) {
  }

  ngOnInit(): void {
    this._subscriptions$.add(this.postsService.allPosts.subscribe(posts => {
      this.posts = posts;
    }));
  }

  remove(id: string) {
    this._subscriptions$.add(this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts?.filter(post => post.id !== id);
    }));
  }

  test() {
    console.log(this.auth.token);
  }

  ngOnDestroy(): void {
    this._subscriptions$.unsubscribe();
  }
}
