import { Component, OnDestroy, OnInit } from '@angular/core';
import {AuthServices} from '../shared/services/auth.services';
import { PostsService } from '../../shared/posts.service';
import { Post } from '../../shared/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mua-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] | undefined;
  pSub: Subscription | undefined;

  constructor(private postsService: PostsService,
              private auth: AuthServices) { }

  ngOnInit(): void {
    this.postsService.getAll.subscribe(posts => {
      this.posts = posts;
    })
  }

  ngOnDestroy() {
    if(this.pSub) {
      this.pSub.unsubscribe();
    }
  }

  test() {
    console.log(this.auth.token);
  }
}
