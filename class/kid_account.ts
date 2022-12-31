import { Account } from "./account";

export class Kid_account extends Account{

    constructor(name: string, account_number:number){
        super(name, account_number)
    }


    public deposit = (deposit_value: number):void => {
       this.set_balance_add_10(deposit_value); console.log(`${this.get_name()} deposit was registred with one addition of 10R$ = $${(deposit_value + 10)}`)
    }

    private set_balance_add_10 = (deposit_value: number): void => {
       this.balance = this.balance + (deposit_value + 10);
    }


}