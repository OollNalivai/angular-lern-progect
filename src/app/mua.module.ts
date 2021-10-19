import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MuaComponent } from './mua.component';
import {FormsModule} from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import {StyleDirective} from './directives/style.directive';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    MuaComponent,
    PostFormComponent,
    PostComponent,
    StyleDirective,
    ExMarksPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MuaComponent]
})
export class MuaModule { }
