import { Account } from "./account";

export class Company_account extends Account{
  
    constructor(name: string, account_number: number, balance: number){
       super(name, account_number);
    };
   
    public get_loan = (loan_value: number): void => {
     this.status ? (() => {this.balance = this.balance + loan_value; console.log(`Loan of ${loan_value} concluded!`)})()  :console.log("You can't get a loan because your account status is: false.")
    };
    

   }
   