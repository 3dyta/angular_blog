import { Component, Input, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PostComment, Post } from '../posts.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

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
    private route: ActivatedRoute,
    private postsService: PostsService,
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

  save(id) {
    //let post = this.postsService.getPost(postId);
     console.log(this.commentForm.value)
     //this.postsService.addComment(this.commentForm.value.postId, this.commentForm.value.nick, this.commentForm.value.content);
     this.dialogRef.close(this.commentForm.value);
   }

  actualDate() {
    let date = new Date();
    let year = date.getFullYear();
    let m = date.getMonth();
    let month = m + 1;
    let day = date.getDate();
    let today = `${day}/${month}/${year}`
    console.log(today);

    return today;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
