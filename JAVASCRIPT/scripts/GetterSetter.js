
export class BankAccount{
    #accountNumber;
    accountType;
    accountBalance;
    customerId;
    constructor(accountType='savings', accountBalance=0,customerId='SC0',accountNumber=0){
       this.accountBalance=accountBalance;
       this.#accountNumber=accountNumber;
       this.accountType=accountType;
       this.customerId=customerId;
    }
    deposit(amount){
        this.accountBalance=this.accountBalance+amount;
        return this.accountBalance;
    }
    get accnum(){
        return this.#accountNumber;
    }
    set accnum(accno){
        this.#accountNumber=accno;
    }

}// class body ended

const account1=new BankAccount(); 
console.log(account1);

const account2=new BankAccount("salary");
console.log(account2);

const account3=new BankAccount("current", 100000); 
console.log(account3);

const account4=new BankAccount("salary", 200000, 'sc1234'); 
console.log(account4);

const account5=new BankAccount("salary", 200000, 'sc1235', 5454545454); 
console.log(account5);
let updatedBalance=account5.deposit(45000);
console.log(updatedBalance);
console.log(account5.accountBalance);

const account6=new BankAccount(); // initialize
console.log(account6);
// state change
account6.accnum=999999; // setter
account6.customerId="SC4545";
account6.accountBalance=78000;
console.log(account6);
console.log(account6.accnum); // getter



ele.innerHTML="<b>hi</b>"; // setter
console.log(ele.innerHTML); // getter



// then use setters to changes default values



