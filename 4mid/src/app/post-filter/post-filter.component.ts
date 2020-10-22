import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../class/post';
import { User } from '../class/user';
import { HttpService } from '../service/http.service';
@Component({
  selector: 'app-post-filter',
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.scss']
})
export class PostFilterComponent implements OnInit {
  iduser;
  // selectedPerson : Post ;
  selected : number;
  @Input() posts: Post[] ;
  @Input() users: User[] ;
  constructor(public httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getUsers()
    .subscribe(users => this.users=users)
  }
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
