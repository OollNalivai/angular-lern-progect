import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';

// http://localhost:4200/ => home
// http://localhost:4200/about => about
// http://localhost:4200/posts => posts

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'posts', component: PostsComponent },
  {path: 'posts/:id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class MuaRoutingModule {

}
