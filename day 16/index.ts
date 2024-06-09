function describe(){
    
  let laptop = {
    make: "Dell",
    model: "latitude 5480 6th generation",
    year: 2017,
  };
  console.log(laptop.make, laptop.model, laptop.year);
}
describe();

// QUESTION 47

let laptops = [
  {
    make: "dell",
    model: "latitude 5480",
    year: 2017,
  },
  { make: "dell", model: "latitude 7590", year: 2021 },

  { make: "hp", model: "elite pro", year: 2010 },
];
let [laptop1, laptop2, laptop3] = laptops;

console.log(laptop1);
console.log(laptop2);
console.log(laptop3);

// QUESTION 48

// let pricesSetOne = [450, 390, 900];
// let pricesSetTwo = [1000, 1670, 1400];
// let combinedPriceThree = [...pricesSetOne, ...pricesSetTwo].sort((a, b) => a - b);
// console.log(combinedPriceThree);

let setPrice1= [500,1000,1500];
let setPrice2= [2000,2500,3000];
let combinedSetPrice = [...setPrice1,...setPrice2].sort((a,b) => a - b);

console.log(combinedSetPrice);



