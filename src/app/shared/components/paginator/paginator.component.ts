import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mua-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 2, 3, 5, 34, 5, 65, 7,
    56, 8, 6, 8, 8, 1, 4, 2, 13, 14, 15, 16, 17,
    2, 3, 5, 34, 5, 65, 78, 6, 8, 8, 1, 4, 2, 13, 14, 15, 16, 17,
    2, 3, 5, 34, 5, 65, 7];

  numberOfPostsShown = 6;
  sliceStart = 0;
  sliceEnd = 6;
  arrPageNumbers: number[] = [];
  currentPage: number | undefined = 1;
  totalPage: number = Math.ceil(this.arr.length / this.numberOfPostsShown);

  ngOnInit(): void {
    for (let i = 1; i <= this.totalPage; i++) {
      this.arrPageNumbers.push(i);
    }

    this.getArrayWithDots();
  }

  clickPage(evt: MouseEvent): void {
    const activeClass = 'active-btn';
    const target = evt.target as HTMLElement;

    if (target.tagName === 'A') {
      // const currentPage = +target.outerText;
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
    let arrPageNumbersDots: (number | string)[] = [];
    const paginatorPageCount = 7;
    // console.log(this.currentPage);

    if (this.totalPage <= paginatorPageCount) { // если страниц меньше 7
      return arrPageNumbersDots;
    }

    if (this.totalPage > paginatorPageCount) {
      let arrWorkspace = this.arrPageNumbers.slice(4, 8);

      arrPageNumbersDots = this.arrPageNumbers.slice(0, 1);

      arrWorkspace.forEach((value, key) => {
        if (key === 0) {
          arrPageNumbersDots.push(dotsText);
          arrPageNumbersDots.push(value);
        }
        if (key === arrWorkspace.length - 1) {
          arrPageNumbersDots.push(value);
          arrPageNumbersDots.push(dotsText);
        }
        if (key !== 0 && key !== arrWorkspace.length - 1)
          arrPageNumbersDots.push(value);
      });

      arrPageNumbersDots.push(this.arrPageNumbers[this.arrPageNumbers.length - 1]);
    }


    return arrPageNumbersDots;
  }
}
