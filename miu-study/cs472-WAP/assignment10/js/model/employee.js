/* LabAssignment 10 - W3D3 - Working with ES6 Classes and ES Module
* Q2. employee.js
* Employee IS-A person, define a sub-class named, Employee, 
* which inherits from Person class
*/

'use strict'

import { Person } from "./person.js";

export class Employee extends Person {
    #salary = null;
    #hireDate = null;
    constructor(name, dateOfBirth, salary, hireDate){
        super(name, dateOfBirth);
        this.#salary = salary;
        this.#hireDate = hireDate;
    }
    getSalary(){return this.#salary}
    getHireDate(){return this.#hireDate}

    setSalary(value){
        this.#salary = value
    }
    setHireDate(value){
        this.#hireDate = value
    }
    doJob(title){
        console.log(`${this.getName()} is a ${title} who earns $${this.getSalary().toFixed(2)}`);
    }
}

