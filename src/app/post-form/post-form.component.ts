import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../mua.component';

@Component({
  selector: 'mua-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {

  @Output() onAddPost: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('inputTitle') inputRef!: ElementRef;

  title = '';
  text = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      };
      this.onAddPost.emit(post);
      this.text = this.title = '';
    }
  }

  focusTitle() {
    this.inputRef.nativeElement.focus();
  }
}
