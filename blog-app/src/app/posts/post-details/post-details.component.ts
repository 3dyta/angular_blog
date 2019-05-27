import { Component, OnInit, Input } from '@angular/core';
import { Post, PostComment } from '../posts.model';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { MatDialog } from '@angular/material';
import { PostCommentComponent } from '../post-comment/post-comment.component';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})

export class PostDetailsComponent implements OnInit {

  @Input() p: Post;
  @Input() comment: PostComment;

  post: Post = {} as Post;

  constructor(private route: ActivatedRoute, private postsService: PostsService, private dialog: MatDialog) { }

  ngOnInit() {
    const postId = this.route.snapshot.params.id;
    this.postsService.getPost(postId)
      .then(res => this.post = res);
  }

  delete(){
    const postId = this.route.snapshot.params.id;
    this.postsService.deletePost(postId).subscribe();
    this.back();
  }

  back(){
    window.history.back();
  };

  count() {
    this.post.likesAmount += 1;
    this.postsService.updatePost(this.post);
  }

  //modal window
  openDialog(id: number): void {
    const dialogRef = this.dialog.open(PostCommentComponent, {
      width: '600px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (this.post.comments === null || this.post.comments === undefined) {
          this.post.comments = Array<PostComment>();
        }
        this.post.comments.push(result);
        this.postsService.updatePost(this.post);
        this.comment = result;
      }

    });
  }

}