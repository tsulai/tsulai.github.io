/**
 * index.js
 */

const express = require("express")
const path = require("path");

const app = express()
// Define middlewares

const port = 5000;

 // setup the express HttpRequest body parser middleware
 app.use(express.urlencoded({ extended: false }));//to use req.body.

console.log('Server started ...')
app.get("/", (req, res, next) => {
   //console.log(`In the homepage http-get route's middleware`);
   res.sendFile(path.join(__dirname, "views", "simpleAdder.html"));
});

app.post("/result", (req, res, next) => {
    //console.log("Result page")
    //console.log(req.body)
    const first = parseFloat(req.body.first)
    const second = parseFloat(req.body.second)    
    const action = req.body.action
    let result
    if(action == 'add'){
        result = first + second
    }else if(action == 'subtract'){
        result = first - second
    }else if(action == 'multiply'){
        result = first * second
    }else if(action == 'divide'){
        result = first/second
    }else {
        result = null
    }    
     res.redirect(303, `/result?rtn=${result}`)   
})

app.get("/result", (req, res, next) => {
    //console.log('Result GET')
    res.send(`<p>The Answer is: ${req.query.rtn} </p><br><a href="/">Another calculation</a>`)
    res.end()
})

app.listen(port);

console.log('Server ended ...')
