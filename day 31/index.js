// QUESTION 91
var addArray = ["zeeshan", "aftab"];
addArray.push("soomro");
console.log(addArray);
// ********************************************************************************
// QUESTIOON 92
var removeArray = ["zeeshan", "soomro", "aftab"];
removeArray.pop();
console.log(removeArray);
// ********************************************************************************
// QUESTIOON 93
var fruits = ["apple", "orange", "kiwi", "banana", "grapes"];
var findIndex = fruits.indexOf("banana");
var replace = fruits.splice(3, 0, "mango");
console.log(replace);
console.log(findIndex);
