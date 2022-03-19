import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SlicePostsPipe } from './pipes/slice-posts.pipe';
import { StringClippingPipe } from './pipes/string-clipping.pipe';

@NgModule({
  imports: [
    RouterModule,
    HttpClientModule,
    QuillModule.forRoot(),
    CommonModule
  ],
  exports: [
    HttpClientModule,
    QuillModule,
    PaginatorComponent,
    SlicePostsPipe,
    StringClippingPipe
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    PaginatorComponent,
    MainLayoutComponent,
    SlicePostsPipe,
    StringClippingPipe,
  ]
})

export class SharedModule {

}
