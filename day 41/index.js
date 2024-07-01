"use strict";
// // QUESTION 01
Object.defineProperty(exports, "__esModule", { value: true });
// for(let i = 0; i <= 10; i++) {
//     if(i === 5){
//         continue
//     }
//     console.log(i);
// }
// // ***************************************************************
// // QUESTION 02
// for(let i = 0; i <= 10; i++) {
//     if(i === 5){
//         break;
//     }
//     console.log(i);
// }
// ***************************************************************
// QUESTION 03
function findVovel(vovel) {
    let vovels = ["a", "i", "o", "u", "e"];
    for (let i = 0; i < vovels.length; i++) {
        if (vovels.includes(vovel[i])) {
            // console.log(vovel[i]);
            break;
        }
    }
}
console.log(findVovel("sdasda"));
