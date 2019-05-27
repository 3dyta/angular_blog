import { Component, Input } from '@angular/core';
import { Post } from '../posts.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})

export class PostItemComponent {

  @Input() post: Post;

  constructor(private postsService: PostsService) {}

  //adding new likes 
  count() {
    this.post.likesAmount += 1;
    this.postsService.updatePost(this.post);
  }

}
