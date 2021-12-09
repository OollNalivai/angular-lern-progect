import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MuaComponent} from './mua.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MuaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  bootstrap: [MuaComponent],
})
export class MuaModule {
}
