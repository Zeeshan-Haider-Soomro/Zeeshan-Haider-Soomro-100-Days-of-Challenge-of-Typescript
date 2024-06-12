// QUESTION 58
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    // average formula
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    // return for get answer
    return total / scores.length;
}
console.log(averageScore(76, 89, 55, 72));
// *******************************************************************
// QUESTION 59
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var addFive = makeAdder(5);
console.log(addFive(10));
// QUESTION 60
var userProfile = (function () {
    var name = "zeeshan";
    var age = "21";
    return {
        displayInfo: function () {
            console.log("Name:".concat(name, ", Age:").concat(age));
        }
    };
})();
userProfile.displayInfo();
