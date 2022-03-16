/**
 * product.js
 */

"use strict"

const express = require("express")
const path = require("path")
const productRouter = express.Router()
const url = require('url')

const productDAO = require("../../db/dao/productDAO")
const Product = require("../../model/product")

//without qs, product listing will show data from Array hardcoded
productRouter.get("/list", async (req, res, next) => {
    console.log("Presenting list of products page")
    const products = productDAO.getProducts()
    res.render("product-list", {products: products}) 
})

//with qs, product listing will append data from qs
productRouter.get("/list?", async (req, res, next) => {
    console.log("Presenting list of products page & Data Append from QS")
    const [products] = productDAO.getProducts()
    products.push(new Product(req.query.productNo, req.query.productName, req.query.unitPrice))
    console.log(products)
    res.render("product-list", {products: products}) 
})

productRouter.get("/new", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../../views/", "product-form.html"))
})

//as not saving to db, the data will not maintain thru new page load
//productDAO save record will not reflect in redirected page, thats y
//pass new record with querystring to list page to show that new record in listing
productRouter.post("/new", (req, res, next) => {
    const newProduct = new Product(parseInt(req.body.productNo),req.body.productName, parseFloat(req.body.unitPrice))
    const result = productDAO.saveProduct(newProduct)
    res.redirect(303, "/product/list?" + new url.URLSearchParams(newProduct));
})

module.exports = productRouter
