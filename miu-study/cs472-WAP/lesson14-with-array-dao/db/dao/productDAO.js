/**
 * productDAO.js 
 * Data Access 
 */
"use strict"

const Product = require("../../model/product")

const productDAO =( function() {
    const products = []
    products.push(new Product(1001, "Apple iPhone", 1700))
    products.push(new Product(1002, "Samsung Android S22", 1500))
    products.push(new Product(1003, "Google Pixel", 1200))

    const getProducts = function() {  
        return products
    }
    const saveProduct = function(product){
        //this data doesn't maintain in storage
        products.push(product)
    }
    return{
        getProducts: getProducts,
        saveProduct: saveProduct        
    }
})();
module.exports = productDAO;