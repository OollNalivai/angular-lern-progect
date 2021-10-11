import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MuaComponent } from './mua.component';
import { PostComponent } from './post/post.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MuaComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MuaComponent]
})
export class MuaModule { }
