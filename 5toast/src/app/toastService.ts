import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class ToastService{
constructor(public toast:ToastrService){}


public getRandom() {
    return Math.floor((Math.random() * 10) + 1);
}

public generateNumber(){
    let number : number = this.getRandom();

    console.log("number : " + number)
    if(number == 7 || number == 3  ){
        this.toast.error( "Generated number is 7 or 3" , "Generated a number", {
            closeButton : true,
            progressBar : true,
            progressAnimation : "increasing",
            positionClass : "toast-bottom-right",
        })
    } else {
        this.toast.success("Generated number is not 7 and 3" , "Generated a number",{
            closeButton : true,
            progressBar : true,
            progressAnimation : "increasing",
            positionClass : "toast-bottom-right",
        })
    }
}
}