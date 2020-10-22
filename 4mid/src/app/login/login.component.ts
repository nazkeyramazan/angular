import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from '../class/user';
import { AuthenticationService } from '../service/authentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // form: any = {};

 username = new FormControl('');
 password = new FormControl('');

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    this.authService.login( { username: this.username.value ,password:  this.password.value });
    // console.log("You are login");
    // .subscribe(
    //   data => {
    //     console.log(data);
    //     // console.log("You are login");
    //   }
    // )
  }

  // login(){
  //     this.authService.login(this.username , this.password);
  // }

}
