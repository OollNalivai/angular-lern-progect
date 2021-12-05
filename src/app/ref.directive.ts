import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[muaRef]',
})

export class RefDirective {
  constructor(public containerRef: ViewContainerRef) {
  }
}
