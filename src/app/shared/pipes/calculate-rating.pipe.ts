import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateRating'
})
export class CalculateRatingPipe implements PipeTransform {

  transform(value: number | undefined): string {
    return value ? value / 5 * 100 + '%' : 0 + '%';
  }

}
