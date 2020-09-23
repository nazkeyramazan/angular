import { Component, OnInit } from '@angular/core';
import { angularMath } from 'angular-ts-math';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  result: string = '';

  longButtons : string[] = ['MC' , 'MR' , 'MS' , 'M+' , 'M-'];

  buttons : string[] = ['%','CE','C','del','1/x','x*x','sqrt(x)','/','7','8','9','*','4','5','6','-','1','2','3','+','+/-','0','.','='];
  
  private prevValue: string = '';
  private currValue: string = '';

  

  

}
