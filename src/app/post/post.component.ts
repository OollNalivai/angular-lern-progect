import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Post, PostsService} from '../posts.service';

@Component({
  selector: 'mua-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  post?: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.post = this.postsService.getById(+params.id);
    });
  }

  LoadPost() {
    this.router.navigate(['/posts', 44]);
  }
}
