export abstract class Account {//numa classe abstrata nós podemos centralizar todos os métodos e atributos genéricos(comuns), que geralmente nós vamos utilizar na maioria das nossas funções
    private readonly name: string;
    private readonly account_number: number;
    public balance: number = 0;
    public status: boolean = true;

  constructor(name: string, account_number: number){
    this.name = name;
    this.account_number = account_number;
  };  


  public get_name = ():string => {
    return this.name;
  }

  public deposit = (deposit_value: number): void => {
     this.balance = deposit_value; console.log(`${this.name} deposited: R$${deposit_value}`)
  }

  public withdraw = (withdraw_value: number): void => {
    this.status && this.balance > withdraw_value  ? (() => { this.balance = this.balance - withdraw_value; console.log(`withdraw of ${withdraw_value} concluded!`) })()   :console.log(`You can't withdraw an amount  greter than ${this.balance}`);
  }
                                  
  public show_balance = (): void => {
    console.log(`Your current balance is: R$${this.balance}`)
  };

  private validate_status = (): boolean => {
    return this.status ?this.status :false;
  }
}


//para tornar uma classe em um "módulo" para que nós possamos exportá-la, devemos adicionar a palavra export antes da palavra ABSTRACT || CLASS