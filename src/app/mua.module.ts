import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MuaRoutingModule } from './mua-routing.module';
import { AppComponent } from './mua.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MuaRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class MuaModule { }
