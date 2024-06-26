// QUESTION 01
function check() {
    return Math.random() > 0.5;
}
console.log(check());
// **********************************************************
// QUESTION 02
function colorgenerate() {
    var col = "#";
    var generate = Math.floor(Math.random() * 6);
    var result = col + generate;
    return result;
}
console.log(colorgenerate());
// **********************************************************
// QUESTION 03
function diceNumber() {
    var result = Math.floor(Math.random() * 5);
    return result;
}
console.log(diceNumber());
