// QUESTION 94

let arr:string[] = ["zeeshan", "haider", "soomro"]
let lengths = arr.map(array => array.length)
console.log(lengths);

// ********************************************************************

// QUESTION 95

function filterValue(numbers:number[]){
    return numbers.filter(number => number > 10)
}
let numbers:number[] = [23,56,12,10,5,17]
console.log(filterValue(numbers));

// ********************************************************************

// QUESTION 96

let numberss:number[] = [1,2,3,4,5,6]

function reduceValue(numbers:number[]){
    return numbers.reduce((sum, number) => sum + number, 0)
}

console.log(reduceValue(numberss));

// *******************************************************************************

