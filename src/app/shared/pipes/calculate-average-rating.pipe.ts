import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAverageRating'
})
export class CalculateAverageRatingPipe implements PipeTransform {

  transform(scoreArray: number[]): number {
    return scoreArray.reduce((acc, curr) => acc + curr) / scoreArray.length;
  }

}
