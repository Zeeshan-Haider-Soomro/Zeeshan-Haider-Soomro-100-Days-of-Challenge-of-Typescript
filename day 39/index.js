// QUESTION 01
function weekdays(day) {
    switch (day) {
        case 1:
            console.log("monday");
            break;
        case 2:
            console.log("tuesday");
            break;
        case 3:
            console.log("wednesday");
            break;
        case 4:
            console.log("thurday");
            break;
        case 5:
            console.log("friday");
            break;
        case 6:
            console.log("saturday");
            break;
        case 7:
            console.log("sunday");
            break;
    }
}
weekdays(7);
// ******************************************************************************
// QUESTION 02
function seasons(months) {
    switch (months) {
        case 3:
        case 4:
            console.log("spring");
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            console.log("summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Autumn");
            break;
        case 12:
        case 1:
        case 2:
            console.log("winter");
            break;
    }
}
seasons(6);
seasons(8);
seasons(2);
// ******************************************************************************
// QUESTION 03
function grades(remarks) {
    switch (remarks) {
        case "A":
            console.log("bohat acha");
            break;
        case "B":
            console.log("acha hai");
            break;
        case "C":
            console.log("theek hai");
            break;
        case "D":
            console.log("hmmm");
            break;
        case "F":
            console.log("maza nahi aya");
            break;
        default:
            console.log("grade is not define");
            break;
    }
}
grades("B");
grades("D");
grades("F");
grades("E");
