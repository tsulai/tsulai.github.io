"use strict"


//multiplesCount
const multiplesCount = (nums, b) => (nums.filter( n => n%b == 0)).length;
console.log(multiplesCount([1,2,3,4,5,6], 3));

//reverseInPlace
const reverseInPlace = function(str){
    let exChangeCount = str.length/2;
    for(let i = 0; i<exChangeCount; i++){        
        const temp = str[i];
        str[i] = str[str.length-(i+1)];
        str[str.length-(i+1)] = temp;
    }
    return str;
}
console.log(reverseInPlace([1,2,3,4,5]));


//printTheName, to the JavaScript Array object
Array.prototype.printTheName = function(name){
    console.log(name);
}

const array = [];
array.printTheName("Su Lai Myint");