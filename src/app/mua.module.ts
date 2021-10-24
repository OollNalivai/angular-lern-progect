import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MuaComponent } from './mua.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    MuaComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [MuaComponent]
})
export class MuaModule { }
