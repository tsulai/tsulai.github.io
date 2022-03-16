/**
 * home.js
 */
"use strict";

const express = require("express");
const homeRouter = express.Router();
const path = require("path")

//Define home page routes
homeRouter.get("/", (req,res,next) => {
    console.log(`Presenting home page url`)
    res.sendFile(path.join(__dirname, "../../views", "index.html"))
})
//try with http://localhost:3000/
homeRouter.get("/home", (req,res,next) => {
    console.log(`Presenting home page url`)
    res.sendFile(path.join(__dirname, "../../views", "index.html"))
})
//try with http://localhost:3000/home

module.exports = homeRouter