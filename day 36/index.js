// // QUESTION 01
// function leapYear(year){
//     let years = year % 4 === 0 && year % 100 !== 0
//     return years
// }
// console.log(leapYear(1800))
// console.log(leapYear(1900))
// console.log(leapYear(2000))
// console.log(leapYear(1700))
// console.log(leapYear(2020))
// console.log(leapYear(2024))
// // **********************************************************
// // QUESTION 02
// function divisible(number){
//     let num = number % 2 === 0 && number % 3 === 0
//     return num
// }
// console.log(divisible(6))
// console.log(divisible(17))
// console.log(divisible(34))
// **********************************************************
// QUESTION 03
function compare(str1, str2) {
    var wordCompare = str1.toLowerCase() === str2.toLowerCase();
    return wordCompare;
}
console.log(compare('haider', 'haider'));
console.log(compare('Zeeshan', 'zeeshan'));
console.log(compare('name', 'name'));
