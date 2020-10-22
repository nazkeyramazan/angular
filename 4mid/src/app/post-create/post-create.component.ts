import { Component, Input, OnInit } from '@angular/core';
import {  User } from '../class/user';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
   @Input() users: User[] ;

  // public posts:Post[] = [];

  // post = new Post() ;
  postfield: any = {};
  constructor( public httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(users => this.users=users);
  }
  
  onSubmit():void{
    alert("New Post created")
    this.httpService.createPost(this.postfield).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
