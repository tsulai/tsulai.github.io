/* Assignment 8 - W3D1 - Objects, Modules Practice Exercises
* Q10
* Create Employee Object with Revealing Module Pattern
*/

'use strict'

const Employee = (function(){
    let name = '', age = 0, salary = 0;
    
    const getAge = function(){
        return age;
    }
    const getSalary = function(){
        return salary;
    }
    const getName = function(){
        return name;
    }
    const setAge = function(newAge){
        age = newAge;
        console.log('setAge('+newAge +'): ' + getAge());
    }
    const setSalary = function(newSalary){
        salary = newSalary;
        console.log('setSalary: ' + salary);
    }
    const setName = function(newName){
        name = newName;
        console.log('setName: ' + name);
    }
    const increaseSalary = function(percentage){
        salary += getSalary() * percentage/100;
        console.log('increseSalary('+ percentage +'):' + getSalary());
    }
    const incrementAge = function(){
        age = getAge() + 1;
        console.log('incrementAge: ' + age);
    }
    return {
        setAge: setAge,
        setSalary: setSalary,
        setName:setName,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    }
})();
Employee.setName("Su Lai");
Employee.setAge(35);
Employee.setSalary(550000);

Employee.incrementAge();
Employee.increaseSalary(10);

//console.log(Employee);