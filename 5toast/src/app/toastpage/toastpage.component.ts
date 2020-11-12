import { Component, OnInit } from '@angular/core';
import {ToastService} from '../toastService';
@Component({
  selector: 'app-toastpage',
  templateUrl: './toastpage.component.html',
  styleUrls: ['./toastpage.component.scss']
})
export class ToastpageComponent implements OnInit {

  constructor(private _toast:ToastService) { }

  ngOnInit(): void {
  }
  public showToast(){
    // this._toast.showToast();
  }
}
