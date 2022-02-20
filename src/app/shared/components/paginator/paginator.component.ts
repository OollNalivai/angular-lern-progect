import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mua-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit{

  arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,2,3,5,34,5,65,7,56,8,6,8,8,9,5,4,3,2,1,3,4];
  numberOfPostsShown: number = 7;
  sliceStart: number = 0;
  sliceEnd: number = 7;
  arrPageNumbers: number[] = [];
  currentPage: number | undefined;
  totalPage: number = Math.ceil(this.arr.length/this.numberOfPostsShown);
  currentEl:  Element | null = document.querySelector('.tools-paginator__button');

  ngOnInit(): void {
    for (let i = 1; i <= this.totalPage; i++ ) {
      this.arrPageNumbers.push(i);
    }
    console.log(this.arr.length);
    console.log(this.arrPageNumbers);
  }

  clickPage($event: any): void {
    this.currentPage = $event.target.innerHTML.replace(/[^0-9]/g,"");
    // this.currentEl?.classList.add('active');
    this.sliceStart = this.currentPage! * this.numberOfPostsShown - this.numberOfPostsShown;
    this.sliceEnd = this.currentPage! * this.numberOfPostsShown;

    console.log(this.currentPage);
  }
}
