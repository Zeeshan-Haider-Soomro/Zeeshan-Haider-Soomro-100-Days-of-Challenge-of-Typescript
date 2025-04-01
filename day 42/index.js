// QUESTION 01
var obj = {
    name: "haider",
    getName: function () {
        return this.name;
    }
};
console.log(obj.getName());
// **********************************************
// QUESTION 02
var fullname = {
    name: "haider ",
    lastName: "Zeeshan",
    margeName: function () {
        return this.name + this.lastName;
    }
};
console.log(fullname.margeName());
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
