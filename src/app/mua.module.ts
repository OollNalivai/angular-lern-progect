import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MuaRoutingModule } from './mua-routing.module';
import { AppComponent } from './mua.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    MuaRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class MuaModule { }
