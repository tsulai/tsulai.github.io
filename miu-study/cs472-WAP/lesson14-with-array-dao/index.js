/**
 * index.js
 * 
 * A demo express.js webapp
 * 
 * @author OKalu
 * @since 2022-03-12
 */

"use strict";

const express = require("express");
const path = require("path");
const homeRoutes = require("./routes/home/home")
const productRoutes = require("./routes/product/product")

const app = express();

// Define middlewares
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.use(express.urlencoded({ extended: false }));

// Set public folder as source for all static content 
// e.g. scripts, images, stylesheets etc.
app.use("/static", express.static(path.join(__dirname, "public")));

// Set up routes for home and other static pages
app.use("", homeRoutes)
app.use("/product", productRoutes)
//try : http://localhost:3000/product/list

// Put the Error 404 middleware last
app.use((req, res, next) => {
    console.log(`Responding by redirecting to the 404 Error page`);
    res.status(404)
    res.sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT_NUMBER = 3000;

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`);
});