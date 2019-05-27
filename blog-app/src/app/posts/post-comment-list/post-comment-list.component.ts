import { Component, OnInit, Input } from '@angular/core';
import { PostComment, Post } from '../posts.model';


@Component({
  selector: 'app-post-comment-list',
  templateUrl: './post-comment-list.component.html',
  styleUrls: ['./post-comment-list.component.css']
})
export class PostCommentListComponent implements OnInit {

  @Input() c: PostComment;
  @Input() post: Post;

  panelOpenState = false;
  
  comment: PostComment = {} as PostComment

  constructor () {}

  ngOnInit() {

  }

}
