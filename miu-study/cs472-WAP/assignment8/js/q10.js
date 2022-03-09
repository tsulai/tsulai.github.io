//Assignment 8 - W3D1 - Objects, Modules Practice Exercises
//Q10
//Revealing Module Pattern
'use strict'

const Employee = (function(){
    let name = '', age = 0, salary = 0;
    
    function getAge(){
        age += 1;        
        console.log('incrementAge: ' + age);
    }
    function getSalary(percentage){
        salary += salary * percentage/100;
        console.log('increseSalary('+ percentage +'):' + salary);
    }
    function getName(){
        console.log('getName: ' + name);
    }   
    return {
        setAge: function(newAge){
            age = newAge;
            console.log('setAge('+newAge +'): ' + age);
        },
        setSalary: function(newSalary){
            salary = newSalary;
            console.log('setSalary: ' + salary);
        },
        setName: function(newName){
            name = newName;
            console.log('setName: ' + name);
        },
        increaseSalary: function(percentage){
            getSalary(percentage);
        },
        incrementAge: function(){
            getAge();
        }
    }
})();
Employee.setName("Su Lai");
Employee.setAge(35);
Employee.setSalary(550000);

Employee.incrementAge();
Employee.increaseSalary(10);

console.log(Employee);