//-----------------------
//Su Lai Myint - 613735 -->
//Lab Assignment 5 - Intro to Javascript - Practice JS Coding Exercise Problems-->

// - Q.15 Displays a working, ticking counter Clock
// -- Status Comment -- 
// UnObstrucsive JS

//-----------------------
"use strict"
window.onload = () => {
    const txtDTNow = document.getElementById('txtDTNow');
    var myInterval = setInterval(()=>{
        var d = new Date();
        var datestring = d.getFullYear()  + "-" + (d.getMonth()+1) + "-" + d.getDate() + " " +
        ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
        txtDTNow.innerHTML = datestring;
        //console.log(datestring);
    },1000);
}