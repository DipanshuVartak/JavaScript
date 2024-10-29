// new way to concatenate string
let name = "JOHN"
let value = 70
console.log(`The name of character is ${name} and he is at the level ${value}`)


let name3 = new String('Johnathan-ano-abc')
console.log(name3[3])
console.log(name3.__proto__)


console.log(name3.toUpperCase())
console.log(name3.charAt(4))
console.log(name3.indexOf('h'))

let newname = name3.substring(0,5)
console.log(newname)

const anonewname = name3.slice(2,4)
console.log(anonewname)

console.log(name3.split('-'))

// let name2 = "hitesh"
// const repoCount = 50
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);