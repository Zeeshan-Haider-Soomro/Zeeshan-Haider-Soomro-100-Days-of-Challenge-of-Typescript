// QUESTION 55

let numbers = [1,2,3,4,5]

// use map method 
let doubleNumber = numbers.map(number => number * 2)

console.log(doubleNumber);

// QUESTION 56

let mixArray = [78, "zeeshan", 43, "haider", true, "56"]

// filter method is use for filter same data type aur same thing from array !!
let stringArray = mixArray.filter(items => typeof items === "string")

console.log(stringArray);

// QUESTION 57

let grades = [86, 72, 70, 55]

// reduce formula for average value find from array !!
let averageGrades = grades.reduce((total, grade) => total + grade, 0) / grades.length

console.log(averageGrades);


