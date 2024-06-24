// // QUESTION 01
// function currentDate(){
//     let date = new Date()
//     let day = date.getDate()
//     let month = date.getMonth() + 1
//     let year = date.getFullYear() 
//     return `day:${day}/ month: ${month}/ year: ${year}`
// }
// console.log(currentDate());
// // ****************************************************************************
// // QUESTION 02
// function newYear(){
//     let currentDate = new Date()
//     let newYearDate = new Date(2025,0,1)
//     let difference = newYearDate.getTime() - currentDate.getTime()
//     let days = Math.floor(difference / (1000 * 60 * 60 * 24))
//     return days
// }
// console.log(newYear() + " remainig days:");
// ****************************************************************************
// QUESTION 03
function birthDay(month, day) {
    var date = new Date();
    var days = date.getDate();
    var months = date.getMonth() + 1;
    var birthday = new Date(date.getFullYear(), months + 1, days);
    return birthday;
}
console.log("next birth day" + (birthDay(6, 17)));
// function getNextBirthday(month: number, day: number): Date {
//     const today = new Date();
//     let year = today.getFullYear();
//     const birthday = new Date(year, month - 1, day); // Months are 0-indexed
//     if (birthday < today) {
//         // If the birthday this year has already passed, use next year's date
//         birthday.setFullYear(year + 1);
//     }
//     return birthday;
// }
// // Replace with your birth month and day
// const nextBirthday = getNextBirthday(12, 25); // Example: December 25th
// console.log("Next birthday on:", nextBirthday.toLocaleDateString());
