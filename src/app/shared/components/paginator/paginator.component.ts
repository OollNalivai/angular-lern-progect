import { Component, EventEmitter, Input, Output, OnInit, AfterViewInit } from '@angular/core';
import { Post, ShowingPosts } from '../../interfaces';

@Component({
  selector: 'mua-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})

export class PaginatorComponent implements OnInit, AfterViewInit {

  @Input() posts!: Post[];
  @Output() changePage = new EventEmitter<ShowingPosts>();

  numberOfPostsShown: number = 4; // выводимое количество постов
  arrPageNumbers: number[] = []; // массив номеров страниц 1, 2, 3, 4
  currentPage: number | undefined = 1; // текущая выбранная страница
  totalPage: number = 0; // вычисление количества страниц

  get updateShowingPosts() {
    let sliceStart = 0; // начало отображаемого диапазона страниц
    let sliceEnd = 6; // конец отображаемого диапазона страниц
    sliceEnd = this.currentPage! * this.numberOfPostsShown;
    sliceStart = sliceEnd - this.numberOfPostsShown;
    return {
      'sliceStart': sliceStart,
      'sliceEnd': sliceEnd
    };
  }

  get getArrayWithDots(): (number | string)[] {
    // console.log(this.totalPage, 'in fn');
    const dotsText = '...';
    const end = 6; // количество страниц показываемое если страниц > 7 && <12
    // end (пересчитывается в коде в зависимости от формата отображения, сама постоянная не меняется)
    const paginatorPageCount = 7; // постоянное колличество показываемых страниц (не менять)
    let arrPageNumbersDots: (number | string)[] = this.arrPageNumbers.slice(0, end);

    if (this.totalPage <= paginatorPageCount) {  // когда страниц меньше показываемых страниц
      return this.arrPageNumbers.slice(0, 7);
    }

    if (this.totalPage > paginatorPageCount) { // когда страниц больше показываемых страниц

      if (this.currentPage && this.currentPage <= 5) {
        arrPageNumbersDots.push(dotsText);
      }

      if (this.currentPage && this.currentPage > this.arrPageNumbers.length - end + 1) {
        arrPageNumbersDots = this.arrPageNumbers.slice(-end);
        arrPageNumbersDots.unshift(dotsText);
      }

      if (
        this.currentPage && this.currentPage > 5 &&
        this.currentPage <= this.arrPageNumbers.length - end + 1
      ) {
        const firstEl: number[] = this.arrPageNumbers.slice(0, 1);
        const [lastEl]: number[] = this.arrPageNumbers.slice(-1);

        arrPageNumbersDots = firstEl;
        arrPageNumbersDots.push(dotsText);

        this.arrPageNumbers.slice(this.currentPage - 2, this.currentPage + 1).forEach(value => {
          arrPageNumbersDots.push(value);
        });

        arrPageNumbersDots.push(dotsText, lastEl);
      }
    }

    return arrPageNumbersDots;
  }

  ngOnInit(): void {
    this.totalPage = Math.ceil(this.posts.length / this.numberOfPostsShown);

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

  addingActiveClass() {
    const allPages = Array.from(document.getElementsByClassName('tools-paginator__button'));

    allPages.forEach((el: Element) => {
      this.currentPage === +el.innerHTML
        ? el.classList.add('active-btn')
        : el.classList.remove('active-btn');
    });
  }

  clickPage(evt: MouseEvent): void {
    const target = evt.target as HTMLElement;

    if (target.tagName === 'A') {
      this.currentPage = +target.outerText;
      this.addingActiveClass();
    }

    this.changePage.emit(this.updateShowingPosts);
    this.getArrayWithDots;
  }

  clickLeft() {
    if (this.currentPage && this.currentPage > 1) {
      this.currentPage--;
      this.addingActiveClass();
      this.changePage.emit(this.updateShowingPosts);
    }
  }

  clickRight() {
    if (this.currentPage && this.currentPage < this.arrPageNumbers.length) {
      this.currentPage++;
      this.addingActiveClass();
      this.changePage.emit(this.updateShowingPosts);
    }
  }
}
