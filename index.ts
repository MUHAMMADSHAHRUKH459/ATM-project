#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
   [
      {
         name: "pin",
         message: "Enter your pin",
         type: "number"
      }
   ]
);

if (pinAnswer.pin === myPin){
   console.log("Correct Pin Code");
   
   let operationAnswer = await inquirer.prompt(
      [
         {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
         }
      ]
   );

   if (operationAnswer.operation === 'Withdraw'){
      let amountAns = await inquirer.prompt(
         [
            {
               name: "amount",
               message: "Enter amount",
               type: "number"
            }
         ]
      );

      if (amountAns.amount > myBalance){
         console.log("Insufficient Balance");
      
      }

      else{
         myBalance -= amountAns.amount;
         console.log(`Your Remaining Balance is: ${myBalance}`);
         
      };
   }
      else if (operationAnswer.operation === 'Check Balance'){
         console.log(`Your Balance is: ${myBalance}`);
      
      } 
        else if (operationAnswer.operation === 'Fast Cash'){
         let fastCash = [
            {name: "1000", value : 1000},
            {name: "2500", value : 2500},
            {name: "5000", value : 5000},
            {name: "10000", value : 10000}
         ];

         let fastCashAns = await inquirer.prompt(
            [
               {
                  name: "amount",
                  message: "Select fast Cash Amount",
                  type: "list",
                  choices: fastCash,
               }
            ]
         );

         if (fastCashAns.amount > myBalance){
            console.log("Insufficient Balance");
            
         } else {
            myBalance -= fastCashAns.amount;
            console.log(`Your Remaining Balance is: ${myBalance}`);
         
         }

        } else {
         console.log("Incorrect Pin Code");

        };

};