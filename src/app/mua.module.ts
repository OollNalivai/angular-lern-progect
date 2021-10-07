import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MuaComponent } from './mua.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    MuaComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MuaComponent]
})
export class MuaModule { }
