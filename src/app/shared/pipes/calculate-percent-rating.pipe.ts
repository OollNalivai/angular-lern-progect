import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatePercentRating'
})
export class CalculatePercentRatingPipe implements PipeTransform {

  transform(value: number | undefined): string {
    return value ? value / 5 * 100 + '%' : 0 + '%';
  }

}
