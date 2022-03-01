//-----------------------
//Su Lai Myint - 613735 -->
//Lab Assignment 5 - Intro to Javascript - Practice JS Coding Exercise Problems-->

// - Q.13 Login Form
// - Adding JS code to login form when submitting the form

// -- Status Comment -- 
// UnObstrucsive JS

//-----------------------
'use strict'
var frmLogin = document.getElementById('FRMLogin');
frmLogin.onsubmit = () => {
  showData();
  return false;
} 
var showData = () => {
  const em = document.getElementById('InputEmail').value;
  const pw = document.getElementById('InputPassword').value;
  const url = document.getElementById('InputURL').value;
  const chk = document.getElementById('ChkMeOut').checked;        
  console.log(em);
  console.log(pw);
  console.log(url);
  console.log(chk);
}
