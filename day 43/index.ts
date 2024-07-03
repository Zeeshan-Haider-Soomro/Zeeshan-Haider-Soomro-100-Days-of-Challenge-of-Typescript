
// QUESTION 01

let traditionalFunction = function(a,b){
    return a + b;
}

let arrowFunction = (a:number,b:number):number => a + b;

console.log(traditionalFunction(17,28));
console.log(arrowFunction(17,28));

// *****************************************************************

// QUESTION 02

const multipleParameters = (...numbers:number[]) => numbers.reduce((total,number) => total * number , 1);


console.log(multipleParameters(12,12,12));

// *****************************************************************

// QUESTION 03

let traditionalVsArrow = {
    value: "BEST FRIENDS AND FUTURE COUPLE",
    traditionalFunction: function(){
        console.log("ZEESHAN & LAIBA", this.value);
        
    },
    arrowFunction: () => {
        console.log("UNKNOWN", this.value);
        
    }
}

traditionalVsArrow.traditionalFunction()
traditionalVsArrow.arrowFunction()








