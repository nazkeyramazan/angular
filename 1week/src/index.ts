import { Calculator } from "./calculator";
import { questionInt,  } from "readline-sync";
import { question  } from "readline-sync";

const a = questionInt("Enter first number :");
console.log(a);


const b = questionInt("Enter second number :");
console.log(b);

const operationn = question("Enter the operatrion + , - , *  or / : ");

const calc = new Calculator(a , b , operationn); 


if(calc.operation == "+"){
     console.log(calc.plus());
}

if(calc.operation == "-"){
    console.log(calc.minus());
}

if(calc.operation == "*"){
    console.log(calc.miltiply());
}

if(calc.operation == "/"){
    console.log(calc.divide());
}
