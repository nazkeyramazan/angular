import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logOut();
  }
 
}
