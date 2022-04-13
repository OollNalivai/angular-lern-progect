import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, FbCreateResponse } from './interfaces';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

type updateType = Pick<Post, "id" | "text" | "title">

@Injectable({providedIn: 'root'})

export class PostsService {

  constructor(private http: HttpClient) {
  }

  get allPosts(): Observable<Post[]> {
    return this.http.get(`${environment.fbDbUrl}/posts.json`)
      .pipe(map((response: {[key: string]: any}) => {
        if (response === null) {
          return [];
        }
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }))
      }));
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.fbDbUrl}/posts/${id}.json`)
      .pipe(map((post: Post) => {
        return {
          ...post, id,
          date: new Date(post.date)
        };
      }));
  }

  create(post: Post): Observable<Post> {
    return this.http.post<FbCreateResponse>(`${environment.fbDbUrl}/posts.json`, post)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...post,
          id: response.name,
          date: new Date(post.date)
        };
      }));
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/posts/${id}.json`)
  }

  update(post: updateType): Observable<updateType> {
    return this.http.patch<updateType>
    (`${environment.fbDbUrl}/posts/${post.id}.json`, post)
  }

  updateRating(updatablePost: Post): Observable<number[]> {
    return this.http.patch<Post>
    (`${environment.fbDbUrl}/posts/${updatablePost.id}.json`, updatablePost)
      .pipe(map((post: Post) => post.scoreArray || []))
  }
}
