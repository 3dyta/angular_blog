export interface Post {
    id?: number,
    title: string,
    content: string,
    datetime: Date,
    likesAmount: number,
    comments: Array<PostComment>
}

export interface PostComment {
    id?: number,
    nick: string,
    content: string,
    datetime?: Date,
}

export enum Sort {
    title = 'title',
    datetime = 'datetime',
}

export enum Order {
    Asc = 'asc',
    Desc = 'desc'
}

