import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MuaComponent} from './mua.component';
import {FormsModule} from '@angular/forms';
import {AboutComponent} from './about/about.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {PostsComponent} from './posts/posts.component';

@NgModule({
  declarations: [
    MuaComponent,
    AboutComponent,
    AboutExtraComponent,
    HomeComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [MuaComponent]
})
export class MuaModule {
}
