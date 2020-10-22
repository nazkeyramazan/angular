import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../class/post';
import {tap} from 'rxjs/operators'
import { User } from '../class/user';
import { Album } from '../class/albums';
import{Comment} from '../class/comment'
@Injectable({providedIn: 'root'})



export class HttpService{
    posts: Post[] ;
    users: User[] ;
    albums: Album[];
    comments: Comment[];
    toke = "Basic YnJldDpRd2VydHkxMjMj";
    baseURL: string = "http://localhost:3000/posts/";
    url  = "https://jsonplaceholder.typicode.com/posts"
    constructor(private http : HttpClient){
    }

    token = localStorage.getItem('token') || '' ;
    
     getPosts(): Observable<Post[]>{
      const header = new HttpHeaders().set('Authorization', 'Basic YnJldDpRd2VydHkxMjMj');
       console.log(localStorage.getItem('token'));
       console.log(header)
        return this.http.get<Post[]> ('http://localhost:3000/posts/'  ,
        { headers: header},
      ).pipe(tap(posts=>this.posts = posts))
    }

    getMyPosts(iduser): Observable<Post[]>{
      const header = new HttpHeaders().set('Authorization', 'Basic YnJldDpRd2VydHkxMjMj');
       console.log(localStorage.getItem('token'));
       console.log(header)
        return this.http.get<Post[]> (`http://localhost:3000/users/${iduser}/posts`  ,
        { headers: header},
      ).pipe(tap(posts=>this.posts = posts))
    }

    createPost(post){
      const header = new HttpHeaders().set('Authorization', 'Basic YnJldDpRd2VydHkxMjMj');
        return this.http.post('http://localhost:3000/posts/' , 
        {
          userId: post.userId,
          title: post.title,
          body: post.body
        },
        { headers: header})
    }
    getComments():Observable<Comment[]>{
      const header = new HttpHeaders().set('Authorization', 'Basic YnJldDpRd2VydHkxMjMj');
      return this.http.get<Comment[]>('http://localhost:3000/comments/',{ headers: header}).pipe(tap(comments => this.comments = comments))
    }
    getMyComments(idpost): Observable<Comment[]>{
      const header = new HttpHeaders().set('Authorization', 'Basic YnJldDpRd2VydHkxMjMj');
        return this.http.get<Comment[]> (`http://localhost:3000/posts/${idpost}/comments`  ,
        { headers: header},
      ).pipe(tap(comments=>this.comments = comments))
    }
    createComment(comment , idpost){
      const header = new HttpHeaders().set('Authorization', 'Basic YnJldDpRd2VydHkxMjMj');
        return this.http.post(`http://localhost:3000/posts/${idpost}/comments` , 
        {
          postId: comment.postId,
          name: comment.name,
          email: comment.email,
          body: comment.body
        },
        { headers: header})
    }


    getUsers(): Observable<User[]>{
      return this.http.get<User[]>('http://localhost:3000/users/').pipe(tap(users => this.users = users));
    }
     
    getAlbums():Observable<Album[]>{
      const header = new HttpHeaders().set('Authorization', 'Basic YnJldDpRd2VydHkxMjMj');
      return this.http.get<Album[]>('http://localhost:3000/albums/',{ headers: header}).pipe(tap(albums=> this.albums = albums))
    }

    
      
}