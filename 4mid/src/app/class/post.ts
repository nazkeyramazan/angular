import {User} from '../class/user';

export interface Post{
    userId: User ;
    id: number;
    title: string;
    body: string;
}