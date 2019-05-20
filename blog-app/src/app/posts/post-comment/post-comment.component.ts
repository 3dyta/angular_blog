import { Component, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PostComment, Post } from '../posts.model';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})

export class PostCommentComponent {
  @Input() postComment: PostComment;
  @Input() post: Post;


  constructor(
    public dialogRef: MatDialogRef<PostCommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PostComment) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  }
