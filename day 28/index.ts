// QUESTION 82

function findString(str: string){
    return str.length
}

console.log(findString("Hello World"))

// ********************************************

// QUESTION 83

function caseChange(str: string,){
    let uppercase = str.toUpperCase()
    let lowercase = str.toLowerCase()
    console.log(uppercase, lowercase);
}

caseChange("zeeshan haider")

// ********************************************

// QUESTION 84

function replaceWord(sentence: string): string {
    return sentence.replace(/javascript/g, "typescript")
}

console.log(replaceWord("I love JavaScript and JavaScript is awesome!"))
