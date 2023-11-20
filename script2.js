'use strict';
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
