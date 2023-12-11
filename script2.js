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

// Challenge #4
const bill = 400;
const tip = (bill >= 50 && bill <=300 ? bill * .15  : bill * .2);
console.log(tip);

// Challenge #5
const calcAvarage = (a,b,c) => (a+b+c) / 3;
const dolphinsAvarage = calcAvarage(85, 54 ,41);
const koalasAvarage = calcAvarage(23, 34 ,27);

const checkWinner = function(){
    if(dolphinsAvarage >= koalasAvarage * 2){
        console.log(`Dolphins win (${dolphinsAvarage} vs. ${koalasAvarage})`);
    }else if (koalasAvarage >= dolphinsAvarage*2){
        console.log(`Koalas win (${koalasAvarage} vs. ${dolphinsAvarage})`);
    } else {
        console.log("Nobody wins")
    }
}

checkWinner();

// Challenge #6
const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2;

const bills = [125, 555, 44];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    const total = bills[i] + tip;
    tips.push(tip);
    totals.push(total);
}

console.log(bills);
console.log(tips);
console.log(totals);

// Challenge #7
const mark = {
    fullname: "Mark Miller",
    height: 1.69,
    weight: 78,
    calcBMI: function () {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI
    }
}

const john = {
    fullname: "John Smith",
    height: 1.95,
    weight: 92,
    calcBMI: function () {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI
    }
}
const johnBMI = john.calcBMI();
const markBMI = mark.calcBMI();

if (mark.BMI > john.BMI) {
    console.log(`Mark's BMI(${mark.BMI}) is higher than John's BMI(${john.BMI})`);
} else {
    console.log(`John's BMI(${john.BMI}) is higher than Mark's BMI(${mark.BMI})`);
}
// Challenge #8
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2;

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

const calcAvarage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}

console.log(bills);
console.log(tips);
console.log(totals);
console.log(calcAvarage(bills));
*/
// Challenge #9
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// Create one player array for each team(variables 'players1' and
// 'players2')

const players1 = game.players[0];
const players2 = game.players[1];
console.log(players1, players2);

const [gk, ...otherPlayers] = players1;
console.log(gk, otherPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);


console.log(allPlayers)