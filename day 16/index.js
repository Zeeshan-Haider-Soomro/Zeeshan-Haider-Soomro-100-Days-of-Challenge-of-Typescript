var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function describe() {
    var laptop = {
        make: "Dell",
        model: "latitude 5480 6th generation",
        year: 2017,
    };
    console.log(laptop.make, laptop.model, laptop.year);
}
describe();
// QUESTION 47
var laptops = [
    {
        make: "dell",
        model: "latitude 5480",
        year: 2017,
    },
    { make: "dell", model: "latitude 7590", year: 2021 },
    { make: "hp", model: "elite pro", year: 2010 },
];
var laptop1 = laptops[0], laptop2 = laptops[1], laptop3 = laptops[2];
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
// QUESTION 48
// let pricesSetOne = [450, 390, 900];
// let pricesSetTwo = [1000, 1670, 1400];
// let combinedPriceThree = [...pricesSetOne, ...pricesSetTwo].sort((a, b) => a - b);
// console.log(combinedPriceThree);
var setPrice1 = [500, 1000, 1500];
var setPrice2 = [2000, 2500, 3000];
var combinedSetPrice = __spreadArray(__spreadArray([], setPrice1, true), setPrice2, true).sort(function (a, b) { return a - b; });
console.log(combinedSetPrice);
