import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/posts.service';
import { Observable } from 'rxjs';
import { Post, ShowingPosts } from '../shared/interfaces';

@Component({
  selector: 'mua-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent implements OnInit {

  posts$: Observable<Post[]> | undefined;
  sliceShowingPosts: ShowingPosts = {
    'sliceStart': 0,
    'sliceEnd': 4
  };

  constructor(
    private _postsService: PostsService,
  ) {
  }

  ngOnInit(): void {
    this.posts$ = this._postsService.allPosts;
  }

  onChangePage(showingPosts: ShowingPosts) {
    this.sliceShowingPosts = {
      'sliceStart': showingPosts.sliceStart,
      'sliceEnd': showingPosts.sliceEnd
    };
  }

}
