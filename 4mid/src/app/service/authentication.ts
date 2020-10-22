import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User, UserLogin} from '../class/user';
import { Observable } from 'rxjs';
@Injectable({
    providedIn : 'root'
})
export class AuthenticationService{

    constructor(private http: HttpClient , private router: Router ){}
    

    public get logged(): boolean{
        return (localStorage.getItem == null  )
    }
    // isLogged(){
    //     if ( !localStorage.getItem('access_token')){
    //         this.router.navigateByUrl('login')
    //     }
    // }
    login(user: UserLogin){
        return this.http.post('http://localhost:3000/sign-in/', user)
        .subscribe((data:any)=>
        {
            this.router.navigateByUrl('/post-list');
            localStorage.setItem('token' , 'Basic YnJldDpRd2VydHkxMjMj');
            console.log(localStorage.getItem('token'));
            console.log(localStorage.length);
            console.log("You are login");
        }
      );
    }

    register(user):Observable<any> {
        this.router.navigateByUrl('/login')
        return this.http.post('http://localhost:3000/users/', 
        {   
            name:user.name,
            email: user.email,
            username: user.username,
            password: user.password,
            phone : user.phone
        }
    );
    }
    
    logOut(){
        localStorage.removeItem('token');
        localStorage.clear();
        this.router.navigateByUrl('/login');
        console.log("You are logOut");
        console.log(localStorage.length);

    }
}