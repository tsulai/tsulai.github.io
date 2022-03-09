/* Assignment 9 - W3D2 - Using Inheritance
*  Q3
*  Re-write the person object with Constructor Function
*  add method toString
*/

'use strict'

function Person(name, dateOfBirth){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
}

Person.prototype.toString = function(){
    const d = new Date(this.dateOfBirth);
    return 'Name: ' + this.name + ', DateOfBirth: ' + d.toISOString().slice(0, 10);
}

const peter = new Person('Peter', '1985-11-10');
console.log(peter.toString());