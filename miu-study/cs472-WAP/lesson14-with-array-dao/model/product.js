/**
 * product.js
 */
"use strict"

//TODO: use ES6 class syntax

function Product(productNo, productName, unitPrice){
    this.productNo = productNo;
    this.productName = productName;
    this.unitPrice = unitPrice;
}

module.exports = Product;