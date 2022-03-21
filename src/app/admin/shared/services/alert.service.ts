import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from '../models/alert-interface';

@Injectable()

export class AlertService {
  alert$ = new Subject<Alert>();

  alertMessage = (type: AlertType, text: string) =>
    this.alert$.next({type: type, text});
}
