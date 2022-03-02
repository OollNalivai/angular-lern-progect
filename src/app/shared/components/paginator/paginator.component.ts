import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mua-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
    46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
    57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67];

  numberOfPostsShown = 3; // выводимое количество постов
  sliceStart = 0; // начало отображаемого диапазона страниц
  sliceEnd = 3; // конец отображаемого диапазона страниц
  arrPageNumbers: number[] = []; // массив номеров страниц 1, 2, 3, 4
  currentPage: number | undefined = 1; // текущая выбранная страница
  totalPage: number = Math.ceil(this.arr.length / this.numberOfPostsShown); // вычисление количества страниц

  ngOnInit(): void {
    for (let i = 1; i <= this.totalPage; i++) {
      this.arrPageNumbers.push(i);
    }

  }

  clickPage(evt: MouseEvent): void {
    const activeClass = 'active-btn';
    const target = evt.target as HTMLElement;
    console.log(target);
    if (target.tagName === 'A') {
      this.currentPage = +target.outerText;

      const allPages = Array.from(document.getElementsByClassName('tools-paginator__button'));

      allPages.forEach((el: Element, index: number) => {
        this.currentPage === index + 1
          ? el.classList.add(activeClass)
          : el.classList.remove(activeClass);
      });
    }

    this.updateShowingPosts();
    this.getArrayWithDots();
  }

  updateShowingPosts(): void {
    this.sliceStart = this.currentPage! * this.numberOfPostsShown - this.numberOfPostsShown;
    this.sliceEnd = this.currentPage! * this.numberOfPostsShown;
  }

  getArrayWithDots(): (number | string)[] {
    const dotsText = '...';
    const paginatorPageCount = 7;
    let start = 0;
    let end = 6;
    let arrPageNumbersDots: (number | string)[] = this.arrPageNumbers.slice(start, end);
    let firstEl: number[] = this.arrPageNumbers.slice(0, 1);
    let [lastEl]: number[] = this.arrPageNumbers.slice(-1);
    if (this.totalPage <= paginatorPageCount) { // если страниц меньше 7
      return arrPageNumbersDots;
    }

    if (this.totalPage > paginatorPageCount) {

      if (this.currentPage! <= 5) {
        arrPageNumbersDots.push(dotsText);
      }
      if (this.currentPage! > this.arrPageNumbers.length - end + 1) {
        arrPageNumbersDots = this.arrPageNumbers.slice(-end)
        arrPageNumbersDots.unshift(dotsText);
      }

      if (this.currentPage! > 5 && this.currentPage! <= this.arrPageNumbers.length - end + 1) {

        arrPageNumbersDots = firstEl;
        arrPageNumbersDots.push(dotsText);

        this.arrPageNumbers.slice(this.currentPage! - 2, this.currentPage! + 1 ).forEach(value => {
          arrPageNumbersDots.push(value);
        })

        arrPageNumbersDots.push(dotsText, lastEl);
      }

    }

    return arrPageNumbersDots;
  }

  clickLeft() {

  }

  clickRight() {

  }
}
