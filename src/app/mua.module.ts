import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MuaComponent } from './mua.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MuaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MuaComponent]
})
export class MuaModule { }
