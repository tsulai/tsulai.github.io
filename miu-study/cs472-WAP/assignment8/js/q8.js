//module factory
//Q8
'use strict'

const make_adder = function(inc){
    let counter = 0;
    const add = function(inc){          
        return counter += inc;           
    }
    return function(){
            return add(inc);       
    }
}
const add5 = make_adder(5);
add5();
add5();
console.log('add5() final counter value is: ' + add5());
const add7 =make_adder(7);
add7();
add7();
console.log('add7() final counter value is: ' + add7());


