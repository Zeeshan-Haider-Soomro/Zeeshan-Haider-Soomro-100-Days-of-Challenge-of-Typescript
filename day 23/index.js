// QUESTION 67
function mixedTypes(number, string1) {
    return number + Number(string1);
}
console.log(mixedTypes(17, "6"));
// ********************************************************************
// QUESTION 68
function decimal(num1, num2) {
    return Math.round((num1 * num2) * 67) / 10;
}
console.log(decimal(0.3, 0.6));
// ********************************************************************
// QUESTION 69
function divideAndMultiply(num1, num2) {
    var quotient = Math.floor(num1 / num2);
    var remainder = num1 % num2;
    return { quotient: quotient, remainder: remainder };
}
console.log(divideAndMultiply(12, 3));
