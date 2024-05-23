//Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product.
//Round the result to two decimal places.

function Product (num1 : number , num2 : number){
    return (num1 * num2)
}

let product = Product (5.75, 7.43)
console.log('Original Answer: ' + product)
console.log('After Roundoff: ' + Math.round(product))