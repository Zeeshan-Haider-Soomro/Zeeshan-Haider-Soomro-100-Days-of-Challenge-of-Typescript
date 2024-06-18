// QUESTION 79

let car = {
  make: "suzuki",
  model: "wagon R",
  year: 2018,
};
console.log(car.model);

// **********************************************************

// QUESTION 80

let cars = {
  make: "suzuki",
  model: "wagon R",
  year: 2018,
  color: "black",
};

cars.color = "white";
cars.year = 2022;

console.log(cars);

// **********************************************************

// QUESTION 81

function objectLoop(obj: object) {
  for (let properties in obj) {
    console.log(`${properties} ${obj[properties]}`);
  }
}

objectLoop({ make: "suzuki", model: "wagon R", year: 2018, color: "black" });
