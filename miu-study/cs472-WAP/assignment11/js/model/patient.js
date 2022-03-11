/**
 *  Assignment 11 - W3D4 - Working with the DOM and Event-handling
 *  patient.js
 *  Patient Class
 *  @author Su Lai
 *  @modified 10 Mar 2022
 */

'use strict'

export class Patient{
    #id = null;
    #firstName = null;
    #middleInitial = null;
    #lastName = null;
    #dob = null;
    #department = null;
    #isOutpatient = null;
    constructor(id,firstName, middleInitial, lastName, dob, department, isOutpatient) {
        this.#id = id;
        this.#firstName = firstName;
        this.#middleInitial = middleInitial;
        this.#lastName = lastName;
        this.#dob = dob;
        this.#department = department;
        this.#isOutpatient = isOutpatient;        
    }
    getId() {return this.#id}
    getFirstName() {return this.#firstName}
    getMiddleInitial() {return this.#middleInitial}
    getLastName(){return this.#lastName}
    getDOB() {return this.#dob}
    getDepartment() {return this.#department}
    getIsOutpatient() {return this.#isOutpatient}
    
}