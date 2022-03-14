import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicePosts'
})
export class SlicePostsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
