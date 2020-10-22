import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import {Comment} from '../class/comment';
import { Post } from '../class/post';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() posts : Post[];
  @Input() comments: Comment[] ;
  idpost:number;
  selected : number; 
  cfield: any = {};
  constructor( public httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getPosts().subscribe(posts => this.posts = posts)
    this.httpService.getComments().subscribe(comments => this.comments = comments)
  }
  select(){
    this.selected = this.idpost;
    this.httpService.getMyComments(this.idpost)
    .subscribe(comments => this.comments = comments);
  }
  onSubmit(){
    this.selected = this.idpost;
    console.log(this.idpost);
    
    this.httpService.createComment(this.cfield , this.idpost).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
