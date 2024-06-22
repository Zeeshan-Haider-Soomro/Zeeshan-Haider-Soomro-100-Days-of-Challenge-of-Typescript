// QUESTION 94
var arr = ["zeeshan", "haider", "soomro"];
var lengths = arr.map(function (array) { return array.length; });
console.log(lengths);
// ********************************************************************
// QUESTION 95
function filterValue(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
var numbers = [23, 56, 12, 10, 5, 17];
console.log(filterValue(numbers));
// ********************************************************************
// QUESTION 96
function reduceValue(numbers) {
    return numbers.reduce(function (sum, number) { return sum + number; }, 0);
}
var numberss = [1, 2, 3, 4, 5, 6];
console.log(reduceValue(numberss));
// *******************************************************************************
