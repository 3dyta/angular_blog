import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostsModule } from './posts/posts.module';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';

const routes: Routes = [
  { path: '', component: PostListComponent},
  { path: 'create', component: PostFormComponent},
  { path: 'posts', component: PostListComponent},
  { path: 'posts/:id', component: PostDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PostsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
