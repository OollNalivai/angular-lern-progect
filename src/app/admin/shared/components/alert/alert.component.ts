import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { Subscription, timeout } from 'rxjs';

@Component({
  selector: 'mua-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  @Input() delay = 5000;

  public text: string | undefined;
  public type = 'success';
  _subscriptions$: Subscription = new Subscription();

  constructor(private alertService: AlertService) {
  }

  ngOnInit(): void {
    this._subscriptions$.add(
      this.alertService.alert$.subscribe(alert => {
        this.text = alert.text;
        this.type = alert.type;

        const timeout = setTimeout(() => {
          clearTimeout(timeout);
          this.text = '';
        }, this.delay);
      })
    );
  }

  ngOnDestroy(): void {
    this._subscriptions$.unsubscribe();
  }

}
