// Dividing and Finding the Remainder: Write a function that divides two numbers and 
//returns both the quotient and the remainder. Use an object to return both values.
function divide(num1, num2) {
    var remainder = num1 % num2;
    var quotient = num1 / num2;
    var object = {
        remainder: remainder,
        quotient: quotient
    };
    return (object);
}
console.log(divide(12, 3));
console.log(divide(5, 4));
