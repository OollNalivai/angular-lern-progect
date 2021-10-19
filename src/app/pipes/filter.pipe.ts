import {Pipe, PipeTransform} from '@angular/core';
import {IPost} from '../mua.component';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {


  transform(posts: IPost[], search = '', field = 'title'): IPost[] {
    if (!search.trim()) {
      return posts;
    }
    return posts.filter(post => {
      return post[field].toLowerCase().includes(search.toLowerCase());
    });
  }
}
