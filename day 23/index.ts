// QUESTION 67

function mixedTypes(number:number, string1:string):number{
    return number + Number(string1)
} console.log(mixedTypes(17,"6"));

// ********************************************************************

// QUESTION 68

function decimal(num1:number, num2:number):number{
    return Math.round((num1 *num2) *67)/10
}
console.log(decimal(0.3,0.6));

// ********************************************************************

// QUESTION 69

function divideAndMultiply(num1:number, num2:number):{quotient:number, remainder:number}{
    let quotient = Math.floor(num1 / num2);
    let remainder = num1 % num2;
    return { quotient, remainder}
}
console.log(divideAndMultiply(12, 3));
