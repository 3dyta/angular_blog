import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './posts.model';

@Injectable()

export class PostsService {

    readonly server: string = 'http://localhost:3000/posts';

    constructor(private http: HttpClient) {}

    createPost(post: Post): any {
        return this.http.post(this.server, post).toPromise();
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
    
}
