//------------------------
//Su Lai Myint - 613735 
//Lab Assignment 5 - Intro to Javascript - Practice JS Coding Exercise Problems
//------------------------
"use strict"
//1.
function max(x, y){
    if(x > y) return x;
    else return y;
}
//2.
function maxOfThree(x, y, z){
    let max;
    if(x > y) max = x;
    else max = y;
    if(max < z) max = z;
    return max;
}
//3.
function isVowel(c){
    if(c.length!= 1) return false;
    else{
        if(c == 'a' || c=='e' || c == 'i' || c=='o' || c=='u'){
            return true;
        }else{
            return false;
        }
    }
}
//4.
function sum(a){
    let sum = 0;
    for(let i =0; i<a.length; i++){
        sum += a[i];
    }
    return sum;
}
function multiply(a){
    let mul = 1;
    for(let i =0; i<a.length; i++){
        mul *= a[i];
    }
    return mul;
}
//5.
function reverse(str){
    let rtn = '';
    for(let i = str.length-1; i>=0; i--){
        rtn += str[i];
    }
    return rtn;
}
//6.
function findLongestWord(a){
    let maxLen = a[0].length;
    for(let i = 1; i<a.length; i++){
        if(a[i].length > maxLen){
            maxLen = a[i].length;
        }
    }
    return maxLen;
}
//7.
function filterLongWords(a , i){
    let newA = new Array();
    for(let j=0; j<a.length; j++){
        if(a[j].length>i){
            console.log(a[j] + ' ' + a[j].length );
            newA.push(a[j]);
        }
    }
    return newA;
} 
//8.
function computeSumOfSquares(a){
    return a.reduce((total, num) => total + (num * num),0);    
}
//9.
function printOddNumbersOnly(a){
    return a.filter(v => v%2 !=0);
    //print
}
//10.
function computeSumOfSquaresOfEvensOnly(a){
    let evenArr = a.filter(v => v%2 == 0);
    return evenArr.reduce((total, num) => total + (num * num),0);
    //0 is initial value for calculate accumulation, without putting 0, not getting correct result
}
//11.
var sumByReduce = function(a){
    return a.reduce((total, num) => total + num,0);
}
var multiplyByReduce = function(a){
    return a.reduce((total, num) => total * num, 1);
}
//12.
var findSecondBiggest = function(a){
    const max = a.reduce((a,b) => a > b ? a : b);
    a.splice(a.indexOf(max),1);// remove max from the array
    return Math.max.apply(null, a); // get the max of the array
}
//13.
var printFibo = function(n,a,b){
    if(n <2) return 0;
    var s = new Array();
    s.push(a);
    s.push(b);
    for(let i = 2; i < n; i++){
        s.push(s[i-2] + s[i-1]);
    }  
    return s;
}

//-----------------------
//document load
//-----------------------
window.onload = function(){
    console.log('1.Calling function - max(4,9) is: ' + max(4,9));   
    console.log('2.Calling function - maxOfThree(12,50,6) is: ' + maxOfThree(12,50,6)); 

    console.log('3.Calling function - isVowel(\'c\') is: ' + isVowel('c'));
    console.log('3.Calling function - isVowel(\'u\') is: ' + isVowel('u')); 

    console.log('4.Calling function - sum([1,2,3,4]) is: ' + sum([1,2,3,4])); 
    console.log('4.Calling function - multiply([1,2,3,4]) is: ' + multiply([1,2,3,4])); 

    console.log('5.Calling function - reverse(\'jag testar\') is: ' + reverse('jag testar')); 
    console.log('6.Calling function - findLongestWord([\'Apple\',\'Avogado\',\'Pineapple\']) is: ' + findLongestWord(['Apple','Avogado','Pineapple']));
    console.log('7.Calling function - filterLongWords([\'Apple\',\'Avogado\',\'Pineapple\',\'Banana\',\'Mango\',\'Prune\'],6) is: ' + filterLongWords(['Apple','Avogado','Pineapple','Banana','Mango','Prune'], 6));
    console.log('8.Calling function - computeSumOfSquares([1,2,3]) is: ' + computeSumOfSquares([1,2,3])); 
    console.log('9.Calling function - printOddNumbersOnly([1,2,3,4]) is: ' + printOddNumbersOnly([1,2,3,4]));
    console.log('10.Calling function - computeSumOfSquaresOfEvensOnly([1,2,3,4,5]) is: ' + computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));
    
    console.log('11.Calling function - sumByReduce([1,2,3,4]) is: ' + sumByReduce([1,2,3,4]));
    console.log('11.Calling function - multiplyByReduce([1,2,3,4]) is: ' + multiplyByReduce([1,2,3,4]));
    
    console.log('12.Calling function - findSecondBiggest([1,2,3,4,5]) is: ' + findSecondBiggest([1,2,3,4,5]));
    
    console.log('13.Calling function - printFibo(1,0,1) is: ' + printFibo(1,0,1));
    console.log('13.Calling function - printFibo(2,0,1) is: ' + printFibo(2,0,1));
    console.log('13.Calling function - printFibo(6,0,1) is: ' + printFibo(6,0,1));
    console.log('13.Calling function - printFibo(10,0,1) is: ' + printFibo(10,0,1));
}
