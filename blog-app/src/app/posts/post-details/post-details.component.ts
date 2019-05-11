import { Component, OnInit } from '@angular/core';
import { Post } from '../posts.model';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  
    post: Post = {} as Post;
  
    constructor(private route: ActivatedRoute, private postsService: PostsService) { }
  
    ngOnInit() {
      const postId = this.route.snapshot.params.id;
      this.postsService.getPost(postId)
      .then(res => this.post = res);
    }
  
  }