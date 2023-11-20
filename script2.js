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
*/
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
