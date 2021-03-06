import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './posts.model';
import { PostComment } from './posts.model';
import { Observable } from 'rxjs';

@Injectable()

export class PostsService {

    readonly server: string = 'http://localhost:3000/posts';

    constructor(private http: HttpClient) { }

    createPost(post: Post): any {
        post.likesAmount = 0;
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
    }

    addComment(id, nick, content): any {
        let post = this.getPost(id);
        let newComment: PostComment;
        newComment.nick = nick;
        newComment.content = content;
        post.comments.put(newComment);
        this.updatePost(post);
    }

    deletePost(id: number): Observable<{}> {
        const url = `${this.server}/${id}`;
        return this.http.delete(url)
    }
}
