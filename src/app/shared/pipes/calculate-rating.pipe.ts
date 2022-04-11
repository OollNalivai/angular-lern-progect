import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateRating'
})

export class CalculateRatingPipe implements PipeTransform {

  transform(scoreArray: number[] | undefined, calculate: 'average' | 'percentage'): number | string {
    let result: number | string = 0;

    if (scoreArray?.length) {
      result = scoreArray.reduce((acc, curr) => acc + curr) / scoreArray.length;
    }

    switch (calculate) {
      case 'average':
        return result;
      case 'percentage':
        return result ? result / 0.05 + '%' : result + '%'; // % от числа 5
      default:
        return result;
    }
  }
}
