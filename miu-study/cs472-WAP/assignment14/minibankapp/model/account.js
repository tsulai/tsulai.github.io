/**
 * account.js
 */
 "use strict"

 //TODO: use ES6 class syntax
 
 //this is constructor function - not class
 function Account(accountNo, customerName, accountType){
     this.accountNo = accountNo;
     this.customerName = customerName;
     this.accountType = accountType;
 }
 
 module.exports = Account;