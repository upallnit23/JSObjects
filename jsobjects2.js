/* Exploring Objects and Math in JavaScript
Tasks 1 thru 3 */

function Account(accountnum, balance, owner, amount) {
    this.accountnum = accountnum;
    this.balance = balance;
    this.owner = owner;
    this.amount = amount;
}

function bankDeposit(accountnum, balance, amount) {
    if (!accountnum || !amount) {
        console.log("Invalid account number!");
    }
    this.balance += amount
    console.log("New balance is $${this.balance}.");
}

function bankWithdrawal(accountnum, balance, amount) {
    if (!accountnum) {
        console.log("Invalid account number!");
    
    }  if (balance < amount) {
        console.log("Not enough funds to get requested amount.");
    } else {
        this.balance -= amount;
        console.log("Balance of $${amount} withdrawn successfully.");
    }
}

function compInterest(accountnum, balance) {
    if (!accountnum) {
        console.log("Invalid account number!");
    }
    if (this.balance > 5000) {
        let interest = this.balance * 0.05;
        console.log("Interest rate is ${interest}.");
}
}
