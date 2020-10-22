import { Post } from './post';

export class Comment{
    postId: Post;
    id: number;
    name: string;
    email: string;
    body: string;
}