// Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables
// a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

let a :number = 5
let b : number = 10
console.log ('Before swap: ', 'a = ' + a,'\n', 'b = ' + b)

let c :number = a
a = b
b = c

console.log ('After swap: ', 'a = ' + a, '\n', 'b = ' + b)