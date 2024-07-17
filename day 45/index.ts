// call back function

function parntFunction(abc: () => void){
    console.log("Zeeshan is here for serve you a tea meri jaan");
    abc()
}

function bachaFunction(){
    console.log("Laiba means Love of Zeeshan");
    
}
parntFunction(bachaFunction)
