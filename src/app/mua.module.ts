import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MuaComponent} from './mua.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MuaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MuaComponent]
})
export class MuaModule {
}
