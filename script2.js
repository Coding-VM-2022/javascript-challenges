'use strict';
/*
// Challenge #1
const johnHeight = 1.95;
const markHeight = 1.69;
const johnMass = 92;
const markMass = 78;

let markHigherBMI;

const johnBMI = johnMass / (johnHeight**2);
const markBMI = markMass / (markHeight**2);

if (markBMI > johnBMI){
    markHigherBMI=true;
} else {
    markHigherBMI=false
}

console.log(markHigherBMI);
// Challenge #2
const johnHeight = 1.95;
const markHeight = 1.69;
const johnMass = 92;
const markMass = 78;

const johnBMI = +(johnMass / (johnHeight**2)).toFixed(2);
const markBMI = +(markMass / (markHeight**2)).toFixed(2);

if (markBMI > johnBMI){
    console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`)
} else if (markBMI < johnBMI){
    console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!"`)
}
*/

// Challenge #3
const dolphinsAvarage = (97+ 112 + 101) / 3;
const koalasAvarage = (109+ 95 + 106) / 3;

if (dolphinsAvarage >= 100 && dolphinsAvarage > koalasAvarage){
    console.log("Dolphins win");
} else if (koalasAvarage >= 100 && koalasAvarage > dolphinsAvarage) {
    console.log("Koalas win");
} else if ((koalasAvarage>=100) === (dolphinsAvarage>=100)) {
    console.log("Draw")
} else {
    console.log("Nobody wins")
}