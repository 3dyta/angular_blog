import { Component, OnInit, Input } from '@angular/core';
import { PostComment, Post } from '../posts.model';

@Component({
  selector: 'app-post-comment-item',
  templateUrl: './post-comment-item.component.html',
  styleUrls: ['./post-comment-item.component.css']
})

export class PostCommentItemComponent implements OnInit {

  @Input() comment: PostComment;
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}