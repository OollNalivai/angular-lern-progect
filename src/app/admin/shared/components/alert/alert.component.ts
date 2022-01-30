import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mua-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() delay = 5000;

  public text: string | undefined;
  public type = 'success';

  constructor() { }

  ngOnInit(): void {
  }

}
