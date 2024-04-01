#! /usr/bin/env node

import inquirer from "inquirer"
 
const answer = await inquirer.prompt([
    {message:"Write your first number", type:"number", name:"FirstNumber"},
    {message:"Write your second number", type:"number", name:"SecondNumber"},
    {message:"select one off the operators to perform actions",
    type:"list",
    name:"operator",
    choices:["Additions","Subtraction","Multiplication","Division"],
},
]);
// Conditional startement....

if(answer.operator === "Additions"){
    console.log( answer.FirstNumber + answer.SecondNumber);
}else  if(answer.operator === "Subtraction"){
    console.log( answer.FirstNumber - answer.SecondNumber);

}else if(answer.operator === "Multiplication"){
    console.log(  answer.FirstNumber * answer.SecondNumber);

}else if(answer.operator === "Division"){
    console.log(  answer.FrstNumber / answer.SecondNumber);

}else{
    console.log(" Please select valid operator!")
}