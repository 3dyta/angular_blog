import { Component, Input, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PostComment, Post } from '../posts.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})

export class PostCommentComponent implements OnInit {

  @Input() postComment: PostComment;
  @Input() post: Post;

  commentForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PostCommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PostComment,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.commentForm = this.fb.group({
      nick: ["", Validators.required],
      content: ["", Validators.required],
      dateTime: this.actualDate()
    })
  }

  save() {
     this.dialogRef.close(this.commentForm.value);
   }

  actualDate() {
    let date = new Date();
    let year = date.getFullYear();
    let m = date.getMonth();
    let month = m + 1;
    let day = date.getDate();
    let today = `${day}/${month}/${year}`

    return today;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}