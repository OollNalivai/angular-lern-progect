import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[muaStyle]',

})
export class StyleDirective {

  @Input('muaStyle') color: string | null = 'blue';
  @Input() dStyles!: { border?: string, fontWeight?: string };

  @HostBinding('style.color') elColor: string | null = null;

  constructor(private el: ElementRef, private r: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClikus(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color;
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
  }
  @HostListener('mouseleave') onLeave() {
    this.elColor = null;
    // this.r.setStyle(this.el.nativeElement, 'color', null);
    this.r.setStyle(this.el.nativeElement, 'border', null);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
  }
}
