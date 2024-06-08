#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance= 10000;
let myPin= 1111

let pinAnswer = await inquirer.prompt([{
    name:"pin",
    type: "number" ,
    message : "ENTER YOUR PIN PLEASE"
   

}])
if (pinAnswer.pin === myPin){console.log("ACCESS GRANTED")

let actionAns =await inquirer.prompt([{
    name:"action",type :"list",message:"what do you want",choices:["withdraw","check your balance"]
}])
if (actionAns.action==="withdraw"){
    let amountAns = await inquirer.prompt([{
        name : "amount",type : "number",message:"ENTER YOUR AMOUNT"
    }])
    myBalance -= amountAns.amount
    console.log("your cash is withdrawing now your current balance is "+ myBalance)
}
else if (actionAns.action="check your balance"){console.log("YOUR BALANCE IS " +myBalance)}
}
 else (console.log("Incorrect Pin"))
