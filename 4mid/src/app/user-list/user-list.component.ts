import { Component, Input, OnInit } from '@angular/core';
import { User } from '../class/user';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: User[] ;
  constructor(public httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getUsers()
  .subscribe(users => this.users=users)
  }

}
