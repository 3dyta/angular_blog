export interface Post {
    id?: number,
    title: string,
    content: string,
    postFile: string,
    datetime: Date,
    likesAmount: number,
    comments: PostComment[]
}

export interface PostComment {
    postId: number,
    id?: number,
    nick: string,
    content: string,
    datetime: Date,
}

export enum Sort {
    title = 'title',
    datetime = 'datetime',
}

export enum Order {
    Asc = 'asc',
    Desc = 'desc'
}

