import { Component, ViewChild } from '@angular/core';

import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
 
  title = 'questionnaire';

  textControl = new FormControl('');
  numberControl = new FormControl(20);
  radioControl = new FormControl("Мужской");

  checkboxControl = new FormControl();

  selectControl = new FormControl("1");
  form = new FormGroup({

      name : this.textControl,
      age: this.numberControl,
      gender: this.radioControl,
      year_of_study: this.selectControl,
      subjects: this.checkboxControl,
  

  });


}

