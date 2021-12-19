import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MuaRoutingModule} from './mua-routing.module';
import {MuaComponent} from './mua.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostPageComponent} from './post-page/post-page.component';
import {PostComponent} from './shared/components/post/post.component';

@NgModule({
  declarations: [
    MuaComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    MuaRoutingModule,
  ],
  providers: [],
  bootstrap: [MuaComponent],
})
export class MuaModule {
}
