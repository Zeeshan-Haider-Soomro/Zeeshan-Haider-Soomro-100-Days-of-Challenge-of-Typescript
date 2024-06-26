// QUESTION 01

function check():boolean{
    return Math.random() >0.5
}
console.log(check());

// **********************************************************

// QUESTION 02

function colorgenerate(){
    let col = "#"
    let generate = Math.floor(Math.random() * 6)
    let result = col + generate
    return result
}

console.log(colorgenerate());

// **********************************************************

// QUESTION 03

function diceNumber(){
    let result = Math.floor(Math.random() * 6) + 1
    return result
}

console.log(diceNumber());



