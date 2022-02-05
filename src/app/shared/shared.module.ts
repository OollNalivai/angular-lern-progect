import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  imports: [
    HttpClientModule,
    QuillModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    QuillModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ]
})

export class SharedModule {

  constructor() {
  }
}
