// QUESTION 49

function hobbies(...hobbies: string[]){
    hobbies.forEach(hobby =>{
        console.log(`my hobby is ${hobby}`);
    });
}

hobbies("coding", "play badminton", "Exercise");

// QUESTION 50

let taskOne = "completing my task of javascript"
let taskTwo = "completing my task of typescript"
let taskThree = "watch a series"
let routineIFollow = `My Routine AS I Followed Which Is:\n 1.${taskOne} \n 2.${taskTwo} \n 3.${taskThree}`
console.log(routineIFollow);


// QUESTION 51

function boxArea(width: number, height: number):number{
    return width * height;
}
let calculateArea = (width: number, height: number): number => width * height

console.log(calculateArea(10,12));

