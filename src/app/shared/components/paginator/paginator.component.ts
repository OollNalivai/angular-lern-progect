import { Component, EventEmitter, Input, Output, OnInit, AfterViewInit } from '@angular/core';
import { Post } from '../../interfaces';

@Component({
  selector: 'mua-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})

export class PaginatorComponent implements OnInit, AfterViewInit {

  @Input() posts!: Post[];
  @Output() changePage = new EventEmitter<number>();

  private _numberOfPostsShown: number = 4; // выводимое количество постов
  private _totalPage: number = 0; // вычисление количества страниц
  arrPageNumbers: number[] = []; // массив номеров страниц 1, 2, 3, 4
  currentPage: number | undefined = 1; // текущая выбранная страница

  get updateShowingPosts() {
    let sliceEnd = this.currentPage! * this._numberOfPostsShown || 4; // конец отображаемого диапазона постов
    let sliceStart = sliceEnd - this._numberOfPostsShown || 0; // начало отображаемого диапазона постов
    return {
      'sliceStart': sliceStart,
      'sliceEnd': sliceEnd
    };
  }

  get getArrayWithDots(): (number | string)[] {
    const dotsText = '...';
    const end = 6; // количество страниц показываемое если страниц > 7 && <12
    // end (пересчитывается в коде в зависимости от формата отображения, сама постоянная не меняется)
    const paginatorPageCount = 7; // постоянное колличество показываемых страниц (не менять)
    let arrPageNumbersDots: (number | string)[] = this.arrPageNumbers.slice(0, end);

    if (this._totalPage <= paginatorPageCount) {  // когда страниц меньше показываемых страниц
      arrPageNumbersDots = this.arrPageNumbers.slice(0, paginatorPageCount);
    }

    if (this._totalPage > paginatorPageCount) { // когда страниц больше показываемых страниц

      if (this.currentPage && this.currentPage <= 5) {
        arrPageNumbersDots.push(dotsText);
      }

      if (this.currentPage && this.currentPage > this.arrPageNumbers.length - end + 1) {
        arrPageNumbersDots = [dotsText, ...this.arrPageNumbers.slice(-end)];
      }

      if (
        this.currentPage && this.currentPage > 5 &&
        this.currentPage <= this.arrPageNumbers.length - end + 1
      ) {
        const firstEl: number[] = this.arrPageNumbers.slice(0, 1);
        const [lastEl]: number[] = this.arrPageNumbers.slice(-1);

        arrPageNumbersDots = [...firstEl, dotsText];

        this.arrPageNumbers.slice(this.currentPage - 2, this.currentPage + 1).forEach(value => {
          arrPageNumbersDots.push(value);
        });

        arrPageNumbersDots = [...arrPageNumbersDots, dotsText, lastEl];
      }
    }

    return arrPageNumbersDots;
  }

  ngOnInit(): void {
    this._totalPage = Math.ceil(this.posts.length / this._numberOfPostsShown);

    for (let i = 1; i <= this._totalPage; i++) {
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

    this.changePage.emit(this.currentPage);
    this.getArrayWithDots;
  }

  clickLeft() {
    if (this.currentPage && this.currentPage > 1) {
      this.currentPage--;
      this.addingActiveClass();
      this.changePage.emit(this.currentPage);
    }
  }

  clickRight() {
    if (this.currentPage && this.currentPage < this.arrPageNumbers.length) {
      this.currentPage++;
      this.addingActiveClass();
      this.changePage.emit(this.currentPage);
    }
  }
}
