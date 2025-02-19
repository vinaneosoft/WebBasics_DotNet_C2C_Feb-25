
class BankAccount2{
    constructor(private accountType='savings', public accountBalance=0,public  customerId='SC0',private accountNumber=0){
    
    
    }
    deposit(amount:number){
        this.accountBalance=this.accountBalance+amount;
        return this.accountBalance;
    }
    get accnum(){
        return this.accountNumber;
    }
    set accnum(accno){
        this.accountNumber=accno;
    }

}// class body ended

const baccount1=new BankAccount2(); 
console.log(baccount1);
const baccount2=new BankAccount2("salary");
console.log(baccount2);
const baccount3=new BankAccount2("current", 100000); 
console.log(baccount3);
const baccount4=new BankAccount2("salary", 200000, 'sc1234'); 
console.log(baccount4);
const baccount5=new BankAccount2("salary", 200000, 'sc1235', 5454545454); 
console.log(baccount5);
let bupdatedBalance=account5.deposit(45000);
console.log(updatedBalance);
console.log(account5.accountBalance);
const baccount6=new BankAccount2(); // initialize
console.log(baccount6);
// state change
baccount6.accnum=999999; // setter
baccount6.customerId="SC4545";
baccount6.accountBalance=78000;
console.log(baccount6);
console.log(baccount6.accnum); // getter




// then use setters to changes default values



