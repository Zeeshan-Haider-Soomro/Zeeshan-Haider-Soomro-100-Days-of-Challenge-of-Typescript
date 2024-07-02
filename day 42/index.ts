
// QUESTION 01

let obj = {
    name: "LAIBA❤",
    getName: function(){
        return this.name;
    }
}

console.log(obj.getName());

// **********************************************

// QUESTION 02

let afterNikkah = {
    name: "Laiba ",
    futureSpouse: "Zeeshan",
    margeName:function(){
        return this.name + this.futureSpouse;
    }
}

console.log(afterNikkah.margeName());

// **********************************************

// QUESTION 03

let myObject = {
    property: "value",
    outerMethod: function(){
        console.log(this.property);

        let innerMethod = () => {
            console.log(this.property);
        }

        innerMethod();
        
    }
}

myObject.outerMethod();













