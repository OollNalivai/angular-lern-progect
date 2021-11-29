import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Post, PostsService} from './posts.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {delay} from 'rxjs/operators';
import {UndefinableType} from './global';

@Injectable({providedIn: 'root'})

export class PostResolver implements Resolve<UndefinableType<Post>> {

  constructor(private postsService: PostsService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<UndefinableType<Post>> {
    return of(this.postsService.getById(+route.params.id))
      .pipe(delay(1000));
  }
}
