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
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatNativeDateModule, MatGridListModule, MatDialogModule, MatListModule} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { AboutMeComponent } from '../sidenav/about-me/about-me.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { PostCommentListComponent } from './post-comment-list/post-comment-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { PostCommentItemComponent } from './post-comment-item/post-comment-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { MatTooltipModule } from '@angular/material/tooltip'

library.add(faFacebookSquare, faTwitterSquare, faInstagram)

@NgModule({
  declarations: [PostFormComponent, PostListComponent, 
    PostItemComponent, PostDetailsComponent, PostSearchComponent,
    AboutMeComponent, PostCommentComponent, PostCommentListComponent, PostCommentItemComponent],
  providers: [PostsService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatExpansionModule,
    MatBadgeModule,
    MatListModule,
    FontAwesomeModule,
    MatTooltipModule
    
  ],
  exports: [PostFormComponent, PostListComponent, PostItemComponent, PostDetailsComponent,
     PostSearchComponent, AboutMeComponent, PostCommentComponent, PostCommentListComponent, PostCommentItemComponent],
     
  entryComponents: [PostCommentComponent]
})
export class PostsModule { }
