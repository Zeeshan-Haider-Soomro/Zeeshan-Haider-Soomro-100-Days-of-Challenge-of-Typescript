// QUESTION 82
function findString(str) {
    return str.length;
}
console.log(findString("Hello World"));
// ********************************************
// QUESTION 83
function caseChange(str) {
    var uppercase = str.toUpperCase();
    var lowercase = str.toLowerCase();
    console.log(uppercase, lowercase);
}
caseChange("zeeshan haider");
// ********************************************
// QUESTION 84
function replaceWord(sentence) {
    return sentence.replace(/javascript/g, "typescript");
}
console.log(replaceWord("I love JavaScript and JavaScript is awesome!"));
