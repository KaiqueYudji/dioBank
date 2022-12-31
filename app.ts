import { Account } from "./class/account";
import { Company_account } from "./class/company_account";
import { Kid_account } from "./class/kid_account";
import { People_account } from "./class/people_account";
//NÃO CRIEI TODOS OS ATRIBUTOS COMO PRIVADO POIS ASSIM MEU CODE PERDERIA O CONECEITO DE HERENÇA
//E TAMBÉM PELO FATO QUE A NOVA CLASS NÃO DEVE RECEBER NOVOS ATRIBUTOS(SENDO ASSIM, OS ATRIBUTOS QUE ELA POSSUI DEVEM SER HERDADOS)

const baby_account: Kid_account = new Kid_account("isa",29);
baby_account.deposit(50);
console.log(baby_account.get_name());
baby_account.withdraw(10);
baby_account.show_balance();


console.log(" ");


const mysimtravel_account: Company_account = new Company_account("MySimTravel",1818, 1000);
mysimtravel_account.deposit(1500);
console.log(mysimtravel_account.get_name());
mysimtravel_account.withdraw(500);
mysimtravel_account.show_balance();
mysimtravel_account.get_loan(100);


console.log(" ");


const user1: People_account = new People_account(60, "kaique", 2909);
user1.deposit(5000);
console.log(user1.get_name());
user1.withdraw(1500);
user1.show_balance();
 