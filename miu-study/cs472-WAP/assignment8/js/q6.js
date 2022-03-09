//Assignment 8 - W3D1 - Objects, Modules Practice Exercises
//6
//revealing module
'use strict'
const count = (function(){
    let counter = 0;
    const add = function(){
        counter += 1;
    };
    const reset = function(){
        counter = 0;
    };
    const getValue = function(){
        return counter;
    };    
    return{
        add: add,
        reset: reset,
        value: getValue
    }
})();
count.add();
count.add();
count.add();
count.add();
console.log('Q6')
console.log('After 4xcount.add(): ' + count.value());
count.reset();
console.log('After count.reset(): ' + count.value());