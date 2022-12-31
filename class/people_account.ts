import { Account } from "./account";

export class People_account extends Account{
    document_id: number;
  
   constructor(document_id: number, name: string, account_number: number){
      super(name, account_number);
      this.document_id = document_id;
   }; 
  }