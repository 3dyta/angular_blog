import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './posts.model';
import { PostComment } from './posts.model';

@Injectable()

export class PostsService {

    readonly server: string = 'http://localhost:3000/posts';

    constructor(private http: HttpClient) { }

    createPost(post: Post): any {
        return this.http.post(this.server, post).toPromise();
    }

    updatePost(post: Post): any {
        const url = `${this.server}/${post.id}`;
        return this.http.put(url, post).toPromise();
    }

    getPost(id): any {
        const url = `${this.server}/${id}`;
        return this.http.get(url).toPromise();
    }

    getPosts(searchValue: any): any {
        const { query, sort, order } = searchValue;
        const url = `${this.server}?q=${query}&_sort=${sort}&_order=${order}`;

        return this.http.get(url).toPromise();
    }

    addLike(id): any {
        let likePost = this.getPost(id);
        likePost.likesAmount++;
        this.updatePost(likePost);
        console.log(likePost);
    }

    addComment(id, nick, content): any {
        console.log('addComment');
        console.log(id);
        console.log(nick);
        console.log(content);
        let post = this.getPost(id);
        let newComment: PostComment;
        newComment.nick = nick;
        newComment.content = content;

        post.comments.put(newComment);
        this.updatePost(post);
    }


}
