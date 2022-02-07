import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import enLocaleData from '@angular/common/locales/en';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MuaRoutingModule } from './mua-routing.module';
import { MuaComponent } from './mua.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostComponent } from './shared/components/post/post.component';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptor } from './shared/auth.interceptor';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SliderComponent } from './slider/slider.component';

registerLocaleData(enLocaleData, 'en')

@NgModule({
  declarations: [
    MuaComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    MuaRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor,
    },
  ],
  bootstrap: [MuaComponent],
})
export class MuaModule {
}
