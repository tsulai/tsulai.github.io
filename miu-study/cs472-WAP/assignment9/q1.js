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

const john = Object.create(person, {
    name: {
        value : 'John'
    },
    dateOfBirth: {
        value: new Date('1998-12-10')
    }
})

console.log('The person\'s name is ' + john.getName());
console.log(john.getName() + ' was born on ' + john.dateOfBirth.toISOString().slice(0, 10));