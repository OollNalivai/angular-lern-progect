import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MuaComponent} from './mua.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [
    MuaComponent,
    SwitchComponent,
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
