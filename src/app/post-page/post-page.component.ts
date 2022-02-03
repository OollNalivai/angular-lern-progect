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

  public post$: Observable<Post> | undefined;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.params.pipe(switchMap((params) => {
        return this.postsService.getById(params['id']);
      })
    );
  }

}
