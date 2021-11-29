import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MuaComponent} from './mua.component';
import {FormsModule} from '@angular/forms';
import {HomePageComponent} from './home-page/home-page.component';
import {MuaRoutingModule} from './mua-routing.module';
import {AboutPageComponent} from './about-page/about-page.component';
import {AboutExtraPageComponent} from './about-page/about-extra-page/about-extra-page.component';
import {ColorDirective} from './shared/color.directive';
import {PageNamePipe} from './shared/page-name.pipe';

@NgModule({
  declarations: [
    MuaComponent,
    HomePageComponent,
    AboutPageComponent,
    AboutExtraPageComponent,
    ColorDirective,
    PageNamePipe,
    ColorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MuaRoutingModule,
  ],
  providers: [],
  bootstrap: [MuaComponent],
})
export class MuaModule {
}
