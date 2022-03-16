import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/posts.service';
import { Observable } from 'rxjs';
import { Post } from '../shared/interfaces';

@Component({
  selector: 'mua-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent implements OnInit {

  posts$: Observable<Post[]> | undefined;
  currentPage: number = 1;

  constructor(
    private _postsService: PostsService,
  ) {
  }

  ngOnInit(): void {
    this.posts$ = this._postsService.allPosts;
  }

  onChangePage(current: number): number {
    return this.currentPage = current;
  }

}
