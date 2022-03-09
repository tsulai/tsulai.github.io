/* Assignment 9 - W3D2 - Using Inheritance
*  Q1
*  Object literal Person Object
*  Inheritance with Object.create()
*/
'use strict'
const person = {
    name : '',
    dateOfBirth: null,
    getName: function(){
        return this.name;
    },
    setName: function(n){
        this.name = n;
    }
}