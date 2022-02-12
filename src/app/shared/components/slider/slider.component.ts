import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mua-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  array = [1111111, 2222222, 3333333, 4444444, 5555555, 6666666, 7777777];
  start: number = 0;
  end: number = 3;
  sliderItem = document.getElementsByClassName('slider__item');
  btnLeft = document.getElementsByClassName('left');
  btnRight = document.getElementsByClassName('right');

  constructor() { }

  ngOnInit(): void {
  }

  clickLeft() {

  }

  clickRight() {
    if (this.end === this.array.length) {
    }

    this.array.slice(this.start++, this.end++)
    console.log(this.sliderItem)
  }
}
