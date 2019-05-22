import { Component, OnInit  } from '@angular/core';
import { Post } from '../posts.model';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private ps: PostsService) { }

  ngOnInit() {

  }

  updateList(searchValue = {}) {
    this.ps.getPosts(searchValue)
      .then(res => this.posts = res)
      .catch(err => console.log(err));
console.log(this.posts);
      
  }

  onPostSearch(searchValue: any) {
    this.updateList(searchValue);
  }


}
