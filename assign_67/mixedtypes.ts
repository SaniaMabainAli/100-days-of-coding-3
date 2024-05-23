//Arithmetic with Mixed Types: Write a function that takes two parameters: a number and 
//a string that represents a number (e.g., "5"). Return their sum as a number. 

function sum ( para1 : string , para2 : number) : number {
    return ( Number(para1) + para2) // Number func will change the string to a number
}

console.log(sum("9" , 5))