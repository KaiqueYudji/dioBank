export abstract class Account {//numa classe abstrata nós podemos centralizar todos os métodos e atributos genéricos(comuns), que geralmente nós vamos utilizar na maioria das nossas funções
    private name: string;
    private readonly account_number: number;
    private balance: number = 0;
    private status: boolean = false;

  constructor(name: string, account_number: number){
    this.name = name;
    this.account_number = account_number;
  };  


  public set_name = (name: string): void => {
     this.name = name;
    console.log("New name saved.");
  }

  public get_name = ():string => {
     return this.name;
  }

  public deposit = (): void => {
    this.validate_status() ?console.log("you deposited.") :console.log("your status is false. Verify if you have some pendency")
  }

  public withdraw = (): void => {
    console.log("you withdraw.")
  }
                                  
  public show_balance = (): void => {
    console.log(this.balance)
  };

  private validate_status = (): boolean => {
    return this.status ?this.status :false;
  }
}


//para tornar uma classe em um "módulo" para que nós possamos exportá-la, devemos adicionar a palavra export antes da palavra ABSTRACT || CLASS