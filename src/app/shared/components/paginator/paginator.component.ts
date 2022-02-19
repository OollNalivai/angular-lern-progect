import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mua-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit{


  arr = [1,33,3,4,5,6,6,7,7,3,3,2,2,34,4,2,1,2,3,5,34,5,65,7,56,8,6,8,8,9,5,4,3,2,1];
  allPageLength: number[] = [];

  sliceStart: number = 30;
  sliceEnd: number = 35;

  ngOnInit(): void {
    for (let i = 1; i <= Math.ceil(this.arr.length/5); i++ ) {
      this.allPageLength.push(i);
    }
    console.log(this.arr.length);
    console.log(this.allPageLength);
  }

}
