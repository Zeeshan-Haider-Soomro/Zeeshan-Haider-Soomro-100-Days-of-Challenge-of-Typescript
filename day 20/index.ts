
// QUESTION 58

function averageScore(...scores: number[]): number {
    // average formula
    let total = scores.reduce((sum, score) => sum + score, 0);
    // return for get answer
    return total/ scores.length;
}

console.log(averageScore(76,89,55,72));

// *******************************************************************

// QUESTION 59

function makeAdder(valueToAdd:number): (number) =>number {
    return function(number:number):number {
        return number + valueToAdd;
    }
}
let addFive = makeAdder(5);
console.log(addFive(10));

// *******************************************************************

// QUESTION 60

let userProfile = (function(){
    let name = "zeeshan";
    let age = "21";

    return {
        displayInfo: function(){
            console.log(`Name:${name}, Age:${age}`);
        }
    }
})();

userProfile.displayInfo();

// *********************************************************************










