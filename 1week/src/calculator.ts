
import { questionInt,  } from "readline-sync";
import { question  } from "readline-sync";

// const a = questionInt("Enter first number :");
// console.log(a);


// const b = questionInt("Enter second number :");
// console.log(b);

// const operationn = question("Enter the operatrion + , - , *  or / : ");


export class Calculator { 
    a: number;
    b: number;
    operation: string;
    constructor(a:number , b:number , operation:string){

        this.a = a;
        this.b = b;
        this.operation = operation;
    }

    
    plus(){
        return this.a + this.b;
    }

    minus(){
        return this.a - this.b;
    }

    miltiply(){
        return this.a*this.b;
    }

    divide(){
        return this.a/this.b;
    }



}






//console.log(c.sum);

