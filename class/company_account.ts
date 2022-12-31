import { Account } from "./account";

export class Company_account extends Account{

    constructor(name: string, account_number: number){
       super(name, account_number);
    };
   
    get_loan = (): void => {
     console.log("you catched a loan.");
    };

    deposit = ():void => {
      console.log("the company deposited")  
    }
   }
   