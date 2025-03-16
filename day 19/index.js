// QUESTION 55
var numbers = [1, 2, 3, 4, 5];
// use map method 
var doubleNumber = numbers.map(function (number) { return number * 2; });
console.log(doubleNumber);
// QUESTION 56
var mixArray = [78, "zeeshan", 43, "haider", true, "56"];
var stringArray = mixArray.filter(function (items) { return typeof items === "string"; });
console.log(stringArray);
// QUESTION 57
var grades = [86, 72, 70, 55];
var averageGrades = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
var averageGrade = grades.slice(0);
console.log(averageGrade);
console.log(averageGrades);
