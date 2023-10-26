import { MyCustomError } from "./MyCustomError";
import { Transaction } from "./Transaction";

export class BankAccount {
    accountNumber: String;
    accountHolder: String;
    balance: number;
    transactions: Transaction[] = [];

    constructor(accountNumber: String,
        accountHolder: String,
        balance: number) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
        // this.transactions = transactions;
    }

    deposit(amount: number) {
        this.balance += amount;
        console.log("Deposit of ₹" + amount + " done.");
        this.transactions.push({ type: "deposit", amount, timeStamp: new Date() });
        this.getBalance();
    }
    withdraw(amount: number) {
        if (this.balance > amount) {
            this.balance -= amount;
            this.transactions.push({ type: "withdraw", amount, timeStamp: new Date() });
            console.log("WithDraw of ₹" + amount + " done.");
        }

        else throw new MyCustomError("Insufficient fund!");
        this.getBalance();
    }
    getBalance() {
        console.log("Current Balance: ₹"+ this.balance);
    }

    getHistory() {
        console.log("Transaction History:");
        for (let transaction of this.transactions) {
            console.log(`Type ${transaction.type}, Amount ${transaction.amount}, TimeStamp ${transaction.timeStamp}`);

        }
    }
}