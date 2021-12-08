import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MuaComponent} from './mua.component';
import {FormsModule} from '@angular/forms';
import {ModalComponent} from './modal/modal.component';
import {RefDirective} from './ref.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    MuaComponent,
    ModalComponent,
    RefDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  entryComponents: [ModalComponent],
  bootstrap: [MuaComponent],
})
export class MuaModule {
}
