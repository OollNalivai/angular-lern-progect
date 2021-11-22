import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {ErrorPageComponent} from './error-page/error-page.component';

// http://localhost:4200/ => home
// http://localhost:4200/about => about
// http://localhost:4200/posts => posts
// http://localhost:4200/about/extra => extra

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent, children: [
      {path: 'extra', component: AboutExtraComponent}
    ] },
  {path: 'posts', component: PostsComponent },
  {path: 'posts/:id', component: PostComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class MuaRoutingModule {

}
