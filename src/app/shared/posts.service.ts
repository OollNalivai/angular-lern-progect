import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './interfaces';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})

export class PostsService {

  constructor(private http: HttpClient) {
  }

  create(post: IPost): Observable<IPost> {
    return this.http.post<IPost>(`${environment.fbDbUrl}/posts.json`, post);
  }

}
