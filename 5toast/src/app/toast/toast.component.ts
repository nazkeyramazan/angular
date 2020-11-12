import { Component, Input, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { ToastService } from '../toastService';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(private toast : ToastrService , public toastService : ToastService) { }

  ngOnInit(): void {
  }
  
  title: string ;
  content: string;

  isFail: string = '0';
  button : boolean = false;
  button1 : boolean = false;

  close : boolean = false;
  showTitle : boolean = true ;
  showProgressBar: boolean = false;
  duration : number = 5;
  position : string = "toast-top-right" ;   
  public checkClose():boolean{  
    if(this.close == true)
      this.button = true; 
    else  
      this.button = false;
    return this.button;
  }
  public checkProgressBar():boolean{
    if(this.showProgressBar == true)
    this.button1 = true; 
  else  
    this.button1 = false;
  return this.button1;
  }
  public checkTitle() :boolean{
    if (this.showTitle == false )
      this.title =="title";
      // console.log("show title : " + this.showTitle)
    return this.showTitle;
  }
  
  
  public showToast(){
  
    let checkButton: boolean = this.checkClose()
    let checkPB: boolean = this.checkProgressBar();
    let autoclose : boolean = false;
    if(this.duration==0) autoclose=true;
    let atitle : string = "";
    let titlecheck : boolean = this.checkTitle();
    if(titlecheck==true) {
      atitle = this.title;
    }
    if(this.isFail === '1'){
      this.toast.success( this.content , atitle ,{
        closeButton : checkButton, 
        timeOut : this.duration*1000 ,
        disableTimeOut : autoclose ,
        positionClass : "toast-center-left",
        progressBar : checkPB,
        progressAnimation : "increasing",

      });
    } 
    else if(this.isFail === '0') {
      this.toast.error(this.content , atitle , {
        closeButton : checkButton, 
        timeOut : this.duration*1000  ,
        disableTimeOut : autoclose ,
        positionClass : this.position,
        progressBar : checkPB,
        progressAnimation : "increasing",
      });
    }
    
  }

  public generateNumber(){
    this.toastService.generateNumber();
  }


}
