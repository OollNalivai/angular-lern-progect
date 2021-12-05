import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MuaComponent} from './mua.component';
import {FormsModule} from '@angular/forms';
import {ModalComponent} from './modal/modal.component';
import {RefDirective} from './ref.directive';

@NgModule({
  declarations: [
    MuaComponent,
    ModalComponent,
    RefDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [MuaComponent],
})
export class MuaModule {
}
