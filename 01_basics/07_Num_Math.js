// there are two ways to define Number Datatype 

//1)js automatically assign
let num1 = 10
//2) we can define explicitly define
let num2 = new Number(20)

console.log(num1)  // o/p : 10
console.log(num2)  // o/p : [Number: 20]
 

//converting number to string 

console.log(num2.toString())  // 20
console.log(num2.toString().length) //2

/* The .toFixed() method in JavaScript is used to format a number 
to a specified number of decimal places and returns it as a string. */

console.log(num2.toFixed(2))

/*The .toPrecision() method in JavaScript formats a number to a specified total number of significant digits 
and returns it as a string.

In this example, otherNumber.toPrecision(4) will format otherNumber to four significant digits:*/

num3= 245.6432
console.log(num3.toPrecision(2))  // Note toPrecision method return exponential if before the decimal you have given short number 2.5e+2


// toLocaleString() : this is used to convert number in specified numbering format . By default its according to
// US format but for Indian format use synta toLocaleString('en-IN')

const hundreds = 100000
console.log(hundreds.toLocaleString())  
console.log(hundreds.toLocaleString('en-IN'));