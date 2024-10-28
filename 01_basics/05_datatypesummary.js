//in js both decimal and normal number are considered in number category only
// const score = 100
// const scorevalue = 101
// console.log(typeof score)  // number
// console.log(typeof scorevalue)  // number

const isLoggedIn = false
const outTemp = null
let useremail;

console.log(typeof outTemp) // type of null => object 
console.log(typeof useremail) // type of undefined => undefined

console.log(outTemp) // null
console.log(useremail) // undefined


// Symbols 

const id = Symbol(123)
const anotherId = Symbol(123)
console.log(id==anotherId) //false
console.log(id===anotherId) //false


const Bignum = 1234567n // in the end "n" is used to denote BigInt
console.log(typeof Bignum) // bigint


// Non-Primitive Datatypes

//Arrays
const heros = ["apple","mango","banana"];
console.log(typeof heros) // object


// objects

let myObj = {
    name : "john",
    age : 22,
}

console.log(typeof myObj) //object 

// Functions 

const myFunction = function(){
    console.log("helloworld");
}

console.log(myFunction) //[Function: myFunction]