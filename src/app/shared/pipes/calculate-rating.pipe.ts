import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateRating'
})

export class CalculateRatingPipe implements PipeTransform {

  transform(scoreArray: number[] | undefined, calculatePercent?: boolean): number | string {
    let result: number | string = 0;

    if (scoreArray?.length) {
      result = scoreArray.reduce((acc, curr) => acc + curr) / scoreArray.length;
    }

    if (calculatePercent) {
      result = result ? result / 0.05 + '%' : result + '%'; // % от числа 5
    }

    return result;
  }
}
