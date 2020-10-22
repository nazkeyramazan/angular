import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../class/post';
import { User } from '../class/user';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  iduser;
  // selectedPerson : Post ;
  selected : number;
  @Input() posts: Post[] ;
  @Input() users: User[] ;
  constructor(public httpService: HttpService , private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.httpService.getPosts()
    .subscribe(posts => this.posts=posts);
    this.httpService.getUsers()
    .subscribe(users => this.users=users)
  }
  // onSelect(post:Post){
  //   this.selectedPerson = post;
  // }
  onSubmit(){
    this.selected = this.iduser;
    console.log(this.iduser);
    this.httpService.getMyPosts(this.iduser)
    .subscribe(posts => this.posts=posts);
  }
  getMyPosts(iduser) :void {
    console.log(1+1)
    this.httpService.getMyPosts(iduser)
      .subscribe(products => this.posts = products);
  }

}
