// QUESTION 79
var car = {
    make: "suzuki",
    model: "wagon R",
    year: 2018
};
console.log(car.model);
// **********************************************************
// QUESTION 80
var cars = {
    make: "suzuki",
    model: "wagon R",
    year: 2018,
    color: "black"
};
cars.color = "white";
cars.year = 2022;
console.log(cars);
// **********************************************************
// QUESTION 81
function objectLoop(obj) {
    for (var properties in obj) {
        console.log("".concat(properties, " ").concat(obj[properties]));
    }
}
objectLoop({ make: "suzuki",
    model: "wagon R",
    year: 2018,
    color: "black" });
