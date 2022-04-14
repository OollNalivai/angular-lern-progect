import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mua-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  @Input() delay = 5000;

  text: string | undefined;
  type = 'success';
  #subscriptions$: Subscription = new Subscription();

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.#subscriptions$.add(
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

  ngOnDestroy() {
    this.#subscriptions$.unsubscribe();
  }

}
