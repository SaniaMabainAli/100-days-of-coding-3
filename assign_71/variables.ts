//Compare let and const: Create two examples where let allows reassignment but const does not.
// Try to reassign a const-declared variable and catch the error.

let name1 : string
name1 = "Sania" // assigning the value
console.log(name1)
name1 = "Sara" // reassigning the value
console.log(name1)

const id : number = 1234
console.log(id)
try {
    id = 234 // ERROR : cannot assign to id because it is a constant
}
catch (error) {
    console.log('id = 234 // ERROR : cannot assign to id because it is a constant')
}

