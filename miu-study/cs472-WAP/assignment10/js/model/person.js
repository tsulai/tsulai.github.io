/* LabAssignment 10 - W3D3 - Working with ES6 Classes and ES Module
* Q1 . person.js
* Define a JavaScript ES6 class named, Person
* Export Person 
*/

'use strict'

export class Person {
    #name = null;
    #dateOfBirth = null;
    
    constructor(name, dateOfBirth){
        this.#name = name;
        this.#dateOfBirth = dateOfBirth;
    }
    getName() { return this.#name;}
    getDateOfBirth() { return this.#dateOfBirth }

    setName(name) {
        this.#name = name;
    }
    setDateOfBirth(dob){
        this.#dateOfBirth = dob;
    }
    toString(){
        return `{Name: ${this.getName()}, DateOfBirth: ${this.getDateOfBirth().toISOString().slice(0, 10)}}`
    }
}

// const anna = new Person("Anna Smith", new Date(1998,11,15));
// console.log(anna.toString());

