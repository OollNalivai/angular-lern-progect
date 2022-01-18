import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { MuaRoutingModule } from './mua-routing.module';
import { MuaComponent } from './mua.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostComponent } from './shared/components/post/post.component';
import { SharedModule } from './shared/shared.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';

@NgModule({
  declarations: [
    MuaComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent,
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
