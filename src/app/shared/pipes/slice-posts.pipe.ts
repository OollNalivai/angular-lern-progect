import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../interfaces';

@Pipe({
  name: 'slicePosts'
})
export class SlicePostsPipe implements PipeTransform {

  private _newArrayPosts: Post[] = [];

  transform(posts: Post[], sliceStart: number, sliceEnd: number): Post[] {

    return this._newArrayPosts = posts.slice(sliceStart, sliceEnd);
  }
}
