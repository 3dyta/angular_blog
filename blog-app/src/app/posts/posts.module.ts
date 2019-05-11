import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from './post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostSearchComponent } from './post-search/post-search.component';

@NgModule({
  declarations: [PostFormComponent, PostListComponent, PostItemComponent, PostDetailsComponent, PostSearchComponent],
  providers: [PostsService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [PostFormComponent, PostListComponent, PostItemComponent, PostDetailsComponent, PostSearchComponent]
})
export class PostsModule { }
