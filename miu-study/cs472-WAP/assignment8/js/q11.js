//Q11
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