/* LabAssignment 10 - W3D3 - Working with ES6 Classes and ES Module
* Q1. main.js
* Define a JavaScript ES6 class named, Person
* Import Person class to main.js
*/

'use strict'

import { Person } from "./model/person.js";
import { Employee } from "./model/employee.js"

const persons = [
    new Person("Anna Smith", new Date(1998,11,15)),
    new Person("Bob Jone", new Date(1945,10,16)),
    new Person("Carlos Slim Helu", new Date(1976,8,24))
]

persons.forEach( p => console.log(p.toString()));

const jim = new Employee("Jim Hanson", new Date(1945,10,16), 249995.50, new Date(2021,11,1));
jim.doJob('Software Engineer');