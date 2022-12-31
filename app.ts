import { Account } from "./class/account";
import { Company_account } from "./class/company_account";
import { People_account } from "./class/people_account";


const customer: People_account = new People_account(23,"Kaique", 2323);
//customer.set_name("Kaique Yudji");
//customer.deposit();

const mysimtravel: Company_account = new Company_account("MySimTravel",1818);
mysimtravel.deposit();// exemplo de polimorfismo. O mesmo método deposit que eu herdei da classe account que tem um fluxo e retorno diferente.(sobreescrevi a funçao alterando o seu fluxo)
