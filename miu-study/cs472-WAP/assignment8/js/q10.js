//Q10
'use strict'

const Employee = (function(){
    let name, age, salary;
    const setAge = function(newAge){
        age = newAge;
    }
    const setSalary = function(newSalary){
        salary = newSalary;
    }
    const setName = function(newName){
        name = newName;
    }
    const getAge = function(){
        return age;
    }
    const getSalary = function(){
        return salary;
    }
    const getName = function(){
        return name;
    }
    const increaseSalary = function(percentage){
        salary += getSalary() + (getSalary() * percentage)
    }
    const incrementAge = function(){
        this.setAge(this.getAge + 1);
    }
    return {
        setAge: setAge,
        setSalary: setSalary,
        setName: setName,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    }
})();
Employee.setName("Su Lai");
Employee.setAge("35");
Employee.setSalary("550000");
console.log(Employee);