import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class LogTypeService {

  logType(i: any) {
    return typeof i;
  }

}
