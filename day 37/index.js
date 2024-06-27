// QUESTION 109
var date = new Date();
if (date.getHours() < 12) {
    console.log("Good Morning");
}
else {
    ("Good afternoon");
}
// ************************************************************************************************
// QUESTION 110
function grades(scores) {
    if (scores >= 90) {
        console.log("A+ grade");
    }
    else if (scores >= 80) {
        console.log("A grade");
    }
    else if (scores >= 70) {
        console.log("B grade");
    }
    else if (scores >= 60) {
        console.log("C grade");
    }
    else if (scores >= 50) {
        console.log("D grade");
    }
    else if (scores < 50) {
        console.log("E grade");
    }
}
grades(92);
grades(86);
grades(72);
grades(65);
grades(55);
grades(45);
// ************************************************************************************************
// QUESTION 111
function ages(group) {
    if (group < 13) {
        return "child";
    }
    else if (group >= 13 && group <= 19) {
        return "teenager";
    }
    else if (group >= 20) {
        return "adult";
    }
}
console.log(ages(12));
console.log(ages(16));
console.log(ages(21));
