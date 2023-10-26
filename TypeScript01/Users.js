"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankAccount_1 = require("./BankAccount");
var myAccount = new BankAccount_1.BankAccount("123456789123", "Sunil Thakur", 500);
myAccount.deposit(100);
myAccount.withdraw(500);
myAccount.withdraw(500);
myAccount.getHistory();
