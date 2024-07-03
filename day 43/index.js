// QUESTION 01
var _this = this;
var traditionalFunction = function (a, b) {
    return a + b;
};
var arrowFunction = function (a, b) { return a + b; };
console.log(traditionalFunction(17, 28));
console.log(arrowFunction(17, 28));
// *****************************************************************
// QUESTION 02
var multipleParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multipleParameters(12, 12, 12));
// *****************************************************************
// QUESTION 03
var traditionalVsArrow = {
    value: "BEST FRIENDS AND FUTURE COUPLE",
    traditionalFunction: function () {
        console.log("ZEESHAN & LAIBA", this.value);
    },
    arrowFunction: function () {
        console.log("UNKNOWN", _this.value);
    }
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
