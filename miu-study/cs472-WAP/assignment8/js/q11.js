// Assignment 8 - W3D1 - Objects, Modules Practice Exercises
// Q11
// Extend Employee Object - Module Extension

'use strict'

Employee.extension = (function(){    
    return {
        address : null,
        setAddress: function(newAddress){
            this.address = newAddress;
        },
        getAddress: function(){
            return this.address;
        }

     }
})();

Employee.extension.setAddress('1000 N 4th Street, Fairfield, Iowa, 52557');
console.log(Employee.extension.getAddress());