import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MuaComponent} from './mua.component';
import {FormsModule} from '@angular/forms';
import {HomePageComponent} from './home-page/home-page.component';
import {MuaRoutingModule} from './mua-routing.module';
import {SharedModule} from './shared/shared.module';

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
  ],
  providers: [
  ],
  bootstrap: [MuaComponent],
})
export class MuaModule {
}
