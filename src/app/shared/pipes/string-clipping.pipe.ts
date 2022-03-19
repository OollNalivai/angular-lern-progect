import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringClipping'
})
export class StringClippingPipe implements PipeTransform {

  private _resultValue: string = '';

  transform(value: string, acceptableLength: number): string {
    if (value.length <= acceptableLength) {
      this._resultValue = value;
    }
    if (value.length > acceptableLength) {
      this._resultValue = value.slice(0, acceptableLength + 1) + '...'
    }

    return this._resultValue;
  }

}
