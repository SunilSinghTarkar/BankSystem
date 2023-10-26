"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
var MyCustomError_1 = require("./MyCustomError");
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountHolder, balance) {
        this.transactions = [];
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
        // this.transactions = transactions;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposit of ₹" + amount + " done.");
        this.transactions.push({ type: "deposit", amount: amount, timeStamp: new Date() });
        this.getBalance();
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance > amount) {
            this.balance -= amount;
            this.transactions.push({ type: "withdraw", amount: amount, timeStamp: new Date() });
            console.log("WithDraw of ₹" + amount + " done.");
        }
        else
            throw new MyCustomError_1.MyCustomError("Insufficient fund!");
        this.getBalance();
    };
    BankAccount.prototype.getBalance = function () {
        console.log("Current Balance: ₹" + this.balance);
    };
    BankAccount.prototype.getHistory = function () {
        console.log("Transaction History:");
        for (var _i = 0, _a = this.transactions; _i < _a.length; _i++) {
            var transaction = _a[_i];
            console.log("Type ".concat(transaction.type, ", Amount ").concat(transaction.amount, ", TimeStamp ").concat(transaction.timeStamp));
        }
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
