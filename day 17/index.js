// QUESTION 49
function hobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("my hobby is ".concat(hobby));
    });
}
hobbies("coding", "play badminton", "Exercise");
// QUESTION 50
var taskOne = "completing my task of javascript";
var taskTwo = "completing my task of typescript";
var taskThree = "watch a series";
var routineIFollow = "My Routine AS I Followed Which Is:\n 1.".concat(taskOne, " \n 2.").concat(taskTwo, " \n 3.").concat(taskThree);
console.log(routineIFollow);
// QUESTION 51
function boxArea(width, height) {
    return width * height;
}
var calculateArea = function (width, height) { return width * height; };
console.log(calculateArea(10, 12));
