import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import {Post} from '../mua.component';

@Component({
  selector: 'mua-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
 {

  @Input() myPost!: Post;
  @Output() oonRemove: EventEmitter<number> = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef!: ElementRef;

   removePost() {
     this.oonRemove.emit(this.myPost.id);
   }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.infoRef.nativeElement);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

   ngOnDestroy() {
     console.log('ngOnDestroy');
   }

   nativeElLog() {
    console.log(this.infoRef.nativeElement);
  }

}
