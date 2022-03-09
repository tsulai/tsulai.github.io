/* Assignment 9 - W3D2 - Using Inheritance
*  Q2
*  An Employee IS-A person, applying JavaScript inheritance and 
*  the Object.create(…) method, create a generic object 
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
const employee = {
    salary: 0,
    hireDate: '',
    doJob: function(title){
        console.log(this.name + ' is a ' + title + ' who earns $' + this.salary.toFixed(2));
    }
}
employee.prototype = person;

const anna = Object.create(employee,{
    name: { value: 'Anna'}, //must pass with obj type {} - Property description must be an object
    salary: {value : 249995.50 }
})
anna.doJob('Programmer');

