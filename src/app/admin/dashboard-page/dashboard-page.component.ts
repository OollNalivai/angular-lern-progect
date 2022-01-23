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

  posts: Post[] | undefined = [];
  pSub: Subscription | undefined;
  dSub: Subscription | undefined;
  searchStr = '';

  constructor(private postsService: PostsService,
              private auth: AuthServices) {
  }

  ngOnInit(): void {
    this.pSub = this.postsService.allPosts.subscribe(posts => {
      this.posts = posts;
    });
  }

  remove(id: string) {
    this.dSub = this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts?.filter(post => post.id !== id)
    });
  }

  test() {
    console.log(this.auth.token);
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }
}
