//-----------------------

//Su Lai Myint - 613735 -->
//Lab Assignment 5 - Intro to Javascript - Practice JS Coding Exercise Problems-->

// - Q.13 New Product Form
// - Adding JS code to New Product form when submitting the form

// -- Status Comment -- 
// UnObstrucsive JS
// JS code based on high functional programming format

//-----------------------
'use strict'
const productLogin = document.getElementById('FRMNewProduct');
productLogin.onsubmit = () => {
  showData();
  return false;
} 
//
const txtDate = document.getElementById('InputDateSupplied');
const hdnDateInput = document.getElementById('HdnInputDateSupplied');
hdnDateInput.addEventListener("change", function(){
  console.log(hdnDateInput.value);
  txtDate.value = hdnDateInput.value;
}); 

const showData = () => {
    const pn = document.getElementById('InputProductNum').value;
    const nm = document.getElementById('InputName').value;
    const up = document.getElementById('InputUPrice').value;
    const qty = document.getElementById('InputQStock').value;  
    const sp = document.getElementById('SelSupplier').value;
    const date = document.getElementById('InputDateSupplied').value;      
    window.alert(pn + '\n' + nm + '\n' + up + '\n' + qty + '\n' + sp + '\n' + date);
}

window.onload = () => {

}