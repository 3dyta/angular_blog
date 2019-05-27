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
  private postId: number;


  constructor(private route: ActivatedRoute,
     private postsService: PostsService, 
     private dialog: MatDialog) {

  }

  // //modal window
  // openDialog(id: number): void {
  //   console.log('id');
  //   console.log(id);
  //   const dialogRef = this.dialog.open(PostCommentComponent, {
  //     width: '600px',
  //     height: '400px'
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log(result);
  //     if (this.post.comments == null) {
  //       this.post.comments = Array<PostComment>();
  //     }
  //     this.post.comments.push(result);
  //     this.postsService.updatePost(this.post);
  //     this.comment = result;
  //   });
  // }

  //adding new likes 
  count() {
    this.post.likesAmount += 1;
    this.postsService.updatePost(this.post);

  }

}
