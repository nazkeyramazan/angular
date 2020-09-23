import { Component, OnInit } from '@angular/core';
import { angularMath } from 'angular-ts-math';
@Component({
  selector: 'app-calculator1',
  templateUrl: './calculator1.component.html',
  styleUrls: ['./calculator1.component.scss']
})
export class Calculator1Component implements OnInit {

  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;
  memory = null;
  constructor() { }

  ngOnInit(): void {
  }
  public getNumber(v: string){
    console.log(v);
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;

    }
  }

  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }

  private doCalculation(op , secondOp){
    switch (op){
      case '+':
        return this.firstOperand += secondOp; 
      case '-': 
        return this.firstOperand -= secondOp; 
      case '*': 
        return this.firstOperand *= secondOp; 
      case '/': 
        return this.firstOperand /= secondOp; 
      case '=':
        return secondOp;
      case '%':
        return this.firstOperand = angularMath.percentOfNumber(this.firstOperand, secondOp);
      case '1/x': 
        return this.firstOperand = 1/this.firstOperand;
      case 'sqrt(x)': 
        return this.firstOperand = angularMath.squareOfNumber(this.firstOperand);; 
      case 'x*y': 
        return this.firstOperand = angularMath.powerOfNumber(this.firstOperand , secondOp); 
      case '+/-' :
        return this.firstOperand = angularMath.oppositeOfNumber(this.firstOperand);
      case 'M+' :
        return  this.memory = this.firstOperand + this.memory;
      case 'M-' :
        return  this.memory = this.memory - this.firstOperand ;  
    }
  }

  public getOperation(op: string){
    console.log(op);

    if(this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);

  }

  public clear(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;

  }
  public delete(){
    this.currentNumber = this.firstOperand != "=" ? this.currentNumber.slice(0 , -1) : this.currentNumber;
   
  }

  public memoryclear(){
    this.memory = null;
    this.currentNumber = '0';
    this.waitForSecondNumber = false;
  }

  public memorysave(){
    this.memory = this.currentNumber;
    this.currentNumber = '0';
    this.waitForSecondNumber = false;
  }

  public memoryplus(){
    this.memory = this.currentNumber + this.memory;
  }

  public memoryminus(){
  
  }
  public memoryread(){
    this.currentNumber = this.memory;
  }
















}
