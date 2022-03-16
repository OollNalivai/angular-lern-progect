import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../interfaces';

@Pipe({
  name: 'slicePosts'
})
export class SlicePostsPipe implements PipeTransform {

  private _newArrayPosts: Post[] = [];
  private _sliceStart: number = 0;
  private _sliceEnd: number = 4;
  private _numberOfPostsShown: number = 4;

  transform(posts: Post[], currentPage: number): Post[] {
    this._sliceEnd = currentPage * this._numberOfPostsShown;
    this._sliceStart = this._sliceEnd - this._numberOfPostsShown;

    return this._newArrayPosts = posts.slice(this._sliceStart, this._sliceEnd);
  }
}
