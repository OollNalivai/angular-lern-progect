import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'mua-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, AfterViewInit {

  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
    46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
    57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67];

  numberOfPostsShown: number = 9; // выводимое количество постов
  arrPageNumbers: number[] = []; // массив номеров страниц 1, 2, 3, 4
  currentPage: number | undefined = 1; // текущая выбранная страница
  totalPage: number = Math.ceil(this.arr.length / this.numberOfPostsShown); // вычисление количества страниц

  ngOnInit(): void {
    for (let i = 1; i <= this.totalPage; i++) {
      this.arrPageNumbers.push(i);
    }
  }

  ngAfterViewInit() {
    Array.from(document.getElementsByClassName('tools-paginator__button'))
      .forEach((el: Element) => {
        if (+el.innerHTML === 1) {
          el.classList.add('active-btn');
        }
      });
  }

  clickPage(evt: MouseEvent): void {
    const target = evt.target as HTMLElement;
    if (target.tagName === 'A') {
      this.currentPage = +target.outerText;

      const allPages = Array.from(document.getElementsByClassName('tools-paginator__button'));

      allPages.forEach((el: Element) => {
        this.currentPage === +el.innerHTML
          ? el.classList.add('active-btn')
          : el.classList.remove('active-btn');
      });
    }

    this.updateShowingPosts();
    this.getArrayWithDots();
  }

  updateShowingPosts() {
    let sliceStart = 0; // начало отображаемого диапазона страниц
    let sliceEnd = 9; // конец отображаемого диапазона страниц
    sliceStart = this.currentPage! * this.numberOfPostsShown - this.numberOfPostsShown;
    sliceEnd = this.currentPage! * this.numberOfPostsShown;
    return {
      'sliceStart': sliceStart,
      'sliceEnd': sliceEnd
    };
  }

  getArrayWithDots(): (number | string)[] {
    const dotsText = '...';
    const paginatorPageCount = 7; // постоянное колличество показываемых страниц
    const end = 6;
    let arrPageNumbersDots: (number | string)[] = this.arrPageNumbers.slice(0, end);

    if (this.totalPage <= paginatorPageCount) {
      return arrPageNumbersDots;
    }

    if (this.totalPage > paginatorPageCount) {

      if (this.currentPage! <= 5) {
        arrPageNumbersDots.push(dotsText);
      }
      if (this.currentPage! > this.arrPageNumbers.length - end + 1) {
        arrPageNumbersDots = this.arrPageNumbers.slice(-end);
        arrPageNumbersDots.unshift(dotsText);
      }

      if (this.currentPage! > 5 && this.currentPage! <= this.arrPageNumbers.length - end + 1) {
        const firstEl: number[] = this.arrPageNumbers.slice(0, 1);
        const [lastEl]: number[] = this.arrPageNumbers.slice(-1);

        arrPageNumbersDots = firstEl;
        arrPageNumbersDots.push(dotsText);

        this.arrPageNumbers.slice(this.currentPage! - 2, this.currentPage! + 1).forEach(value => {
          arrPageNumbersDots.push(value);
        });

        arrPageNumbersDots.push(dotsText, lastEl);
      }

    }

    return arrPageNumbersDots;
  }

  clickLeft() {
    if (this.currentPage! > 1) {
      console.log('left');
    }
  }

  clickRight() {
    if (this.currentPage! < this.arrPageNumbers.length) {
      console.log('right');
    }
  }
}
