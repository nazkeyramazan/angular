import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'midterm';
  constructor( public authService:AuthenticationService){

  }
}
