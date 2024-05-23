//Block Scope with let and const: Demonstrate block scope by creating a code block with {} that 
//uses both let and const. Show how variables declared inside the block are not accessible outside of it.

{
let letBlock = "let variable within its block works fine"
const conBlock = "const variable within its block works fine"
console.log(letBlock)
console.log(conBlock)
}

try {
    console.log(letBlock) //cannot find name letBlock
} 
catch(e){
    console.log("let variable outside its block is not accessible")
}

try {
    console.log(conBlock) // cannot find name conBlock
} 
catch(e){
    console.log("const variable outside its block is not accessible")
}