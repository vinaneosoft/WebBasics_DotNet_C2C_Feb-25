
class BankAccount{
    accountNumber;accountType;accountBalance;customerId;
    deposit(amount){
        this.accountBalance=this.accountBalance+amount;
        return this.accountBalance;
    }
}// class body ended

const account1=new BankAccount(); // default constructor
console.log(account1);


