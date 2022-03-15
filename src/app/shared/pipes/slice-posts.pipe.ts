import { Pipe, PipeTransform } from '@angular/core';
import { ShowingPosts } from '../interfaces';

@Pipe({
  name: 'slicePosts'
})
export class SlicePostsPipe implements PipeTransform {

  sliceShowingPosts: ShowingPosts = {
    'sliceStart': 0,
    'sliceEnd': 4
  };

  transform(value: number, ...args: unknown[]): any {
    this.sliceShowingPosts = {
      'sliceStart': 0,
      'sliceEnd': 4
    };
    return console.log(this.sliceShowingPosts);
  }

}
