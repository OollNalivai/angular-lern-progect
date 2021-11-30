import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MuaComponent} from './mua.component';
import {FormsModule} from '@angular/forms';
import {HomePageComponent} from './home-page/home-page.component';
import {MuaRoutingModule} from './mua-routing.module';
import {SharedModule} from './shared/shared.module';
import {AboutPageModule} from './about-page/about-page.module';


@NgModule({
  declarations: [
    MuaComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MuaRoutingModule,
    SharedModule,
    AboutPageModule
  ],
  providers: [
  ],
  bootstrap: [MuaComponent],
})
export class MuaModule {
}
