// QUESTION 01
var obj = {
    name: "LAIBA❤",
    getName: function () {
        return this.name;
    }
};
console.log(obj.getName());
// **********************************************
// QUESTION 02
var afterNikkah = {
    name: "Laiba ",
    futureSpouse: "Zeeshan",
    margeName: function () {
        return this.name + this.futureSpouse;
    }
};
console.log(afterNikkah.margeName());
// **********************************************
// QUESTION 03
var myObject = {
    property: "value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property);
        var innerMethod = function () {
            console.log(_this.property);
        };
        innerMethod();
    }
};
myObject.outerMethod();
