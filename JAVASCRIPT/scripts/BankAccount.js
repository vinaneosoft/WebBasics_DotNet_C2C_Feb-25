
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
let updatedBalance=account5.deposit(45000);
console.log(updatedBalance);
console.log(account5.accountBalance);

const account6=new BankAccount(); // initialize
console.log(account6);
// state change
account6.accountNumber=999999;
account6.customerId="SC4545";
account6.accountBalance=78000;

// then use setters to changes default values

// display value of each instance variable of object account6

console.log(account6.accountBalance); // dot notation
console.log(account6.accountType);
console.log(account6.customerId);
console.log(account6.accountNumber);

console.log(account6['accountType']); // index signature
console.log(account6['accountBalance']); 
console.log(account6['customerId']); 
console.log(account6['accountNumber']); 

let key='accountNumber';
console.log("account number with index signature:"+account6[key]);

for(let key in account6){
    console.log(key);
   // console.log(account6.key);
    console.log(account6[key]); // index signature
}
