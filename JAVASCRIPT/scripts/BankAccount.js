
class BankAccount{
    accountNumber;accountType;accountBalance;customerId;
    constructor(type='savings', accbal=0,cid='SC0',accnum=0){
       this.accountBalance=accbal;
       this.accountNumber=accnum;
       this.accountType=type;
       this.customerId=cid;
    }
    deposit(amount){
        this.accountBalance=this.accountBalance+amount;
        return this.accountBalance;
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

const account6=new BankAccount(); // initialize
console.log(account6);
// then use setters to changes default values



