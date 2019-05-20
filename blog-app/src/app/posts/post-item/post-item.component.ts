import { Component, Input } from '@angular/core';
import { Post, PostComment } from '../posts.model';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PostCommentComponent } from '../post-comment/post-comment.component';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {

  @Input() post: Post;
  @Input() comment: PostComment;

  constructor(private route: ActivatedRoute,
     private postsService: PostsService, 
     private dialog: MatDialog) {

  }

  //modal window
  openDialog(): void {
    const dialogRef = this.dialog.open(PostCommentComponent, {
      width: '600px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.comment = result;
    });
  }

  //adding new likes 
  count() {
    this.post.likesAmount += 1;
    this.postsService.updatePost(this.post);

  }

}
