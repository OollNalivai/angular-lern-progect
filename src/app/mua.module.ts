import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MuaComponent} from './mua.component';
import {FormsModule} from '@angular/forms';
import {ModalComponent} from './modal/modal.component';

@NgModule({
  declarations: [
    MuaComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [MuaComponent],
})
export class MuaModule {
}
