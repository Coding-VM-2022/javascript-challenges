'use strict';
// Part 1
/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both
versions)

3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.

§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

GOOD LUCK �
const caclBMI = function (mass, height) {
    return mass / (height ** 2);
}

const higherBMI = function (marksHeight, marksWeight, johnsHeight, johnsWeight) {
    const marksBMI = caclBMI(marksWeight, marksHeight);
    const johnsBMI = caclBMI(johnsWeight, johnsHeight);

    return marksBMI > johnsBMI;
}

const markHigherBMI = higherBMI(1.69, 78, 1.95, 92);
// const markHigherBMI = higherBMI(1.88, 95, 1.76, 85);
console.log(markHigherBMI);


Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement �

GOOD LUCK �

const caclBMI = function (mass, height) {
    return mass / (height ** 2);
}

const higherBMI = function (marksHeight, marksWeight, johnsHeight, johnsWeight) {
    const marksBMI = caclBMI(marksWeight, marksHeight);
    const johnsBMI = caclBMI(johnsWeight, johnsHeight);

    if (marksBMI > johnsBMI) {
        console.log(`Marks BMI(${marksBMI}) is higher than John's BMI(${johnsBMI})`);
    } else if (johnsBMI > marksBMI) {
        console.log(`Johns BMI(${johnsBMI}) is higher than Marks's BMI(${marksBMI})`);
    }
}

// const markHigherBMI = higherBMI(1.69, 78, 1.95, 92);
const markHigherBMI = higherBMI(1.88, 95, 1.76, 85);

Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �


4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK �


const calcAvarage = function (scores) {
    let totalScore = 0;
    for (let i = 0; i < scores.length; i++) {
        totalScore += scores[i]
    }

    return totalScore / scores.length;
}

const dolphinsAvarage = calcAvarage([97, 112, 101]);
const koalasAvarage = calcAvarage([109, 95, 106]);

const declareWinner = function (dolphinsAvarage, koalasAvarage) {
    if (dolphinsAvarage >= 100 && dolphinsAvarage > koalasAvarage) {
        console.log(`Dolphins(${dolphinsAvarage}) vs Koalas(${koalasAvarage}), Dolphins win`);
    } else if (koalasAvarage >= 100 && koalasAvarage > dolphinsAvarage) {
        console.log(`Koalas(${koalasAvarage}) vs Dolphins(${dolphinsAvarage}), Koalas win`);
    } else if ((koalasAvarage >= 100 && koalasAvarage) === (dolphinsAvarage >= 100 && dolphinsAvarage)) {
        console.log("Its a Draw");
    } else {
        console.log("Nobody Wins the trophy");
    }
}

declareWinner(dolphinsAvarage, koalasAvarage)

Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:

§ Data 1: Test for bill values 275, 40 and 430

GOOD LUCK �

const bill = Number(prompt("Whats the bill?"));
const tip = (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2
const total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);

*/

// Part 2
/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"

4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2

5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

const calcAvarage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const dolphinsAvarage = calcAvarage(85, 54, 41);
const koalasAvarage = calcAvarage(23, 34, 27);

const checkWinner = function (dolphinsAvarage, koalasAvarage) {
    if (dolphinsAvarage >= (koalasAvarage * 2)) console.log(`Dolphins win (${dolphinsAvarage} vs ${koalasAvarage})`);
    else if (koalasAvarage >= (dolphinsAvarage * 2)) console.log(`Koalas win (${koalasAvarage} vs ${dolphinsAvarage})`);
    else console.log("Nobody Wins");
}

checkWinner(dolphinsAvarage, koalasAvarage);

Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data
below

3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

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

Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method

3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.

GOOD LUCK �

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

const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

console.log(mark.BMI);
console.log(john.BMI);

if (mark.BMI > john.BMI) {
    console.log("Marks BMI is greater than Johns");
} else if (john.BMI > mark.BMI) {
    console.log("John's BMI is greater than Marks");
}

Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values

2. Create empty arrays for the tips and the totals ('tips' and 'totals')

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:

4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together

4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)

4.3. Call the function with the 'totals' array

GOOD LUCK �

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2;

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    const total = bills[i] + tip;
    tips.push(tip);
    totals.push(total);
}

console.log(bills);
console.log(tips);
console.log(totals);

const avarageBill = function (bills) {
    let totalBill = 0;
    for (let i = 0; i < bills.length; i++) {
        totalBill += bills[i];
    }
    return totalBill / bills.length;
}

console.log(avarageBill(bills));

Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.

2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]

GOOD LUCK �

const printForecast = function (temps) {
    for (let i = 0; i < temps.length; i++) {
        console.log(`... ${temps[i]}ºC in ${i + 1} days.`)
    }
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 23]);

Coding Challenge #9
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:

GOOD LUCK �
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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
const players1 = game.players[0];
const players2 = game.players[1];

console.log(players1);
console.log(players2);

// 2. The first player in any player array is the goalkeeper and the others are field
// players.For Bayern Munich(team 1) create one variable('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players

const [gk, ...feildPlayers] = players1;
console.log(gk, feildPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams(22
// players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich(team 1) used 3 substitute players.So create a
// new array('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd(called
// 'team1', 'draw' and 'team2')
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names(not an array) and prints each of them to the console, along with the
// number of goals that were scored in total(number of player names passed in)
const printGoals = function (...scoredPlayers) {
    const players = [...scoredPlayers];
    const uniquePlayers = [...new Set(players)];

    for (let i = 0; i < uniquePlayers.length; i++) {
        const playerName = uniquePlayers[i];
        let count = 0;

        for (let j = 0; j < players.length; j++) {
            if (players[j] === playerName) {
                count++;
            }
        }

        const goalsText = count === 1 ? 'goal' : 'goals';
        console.log(`${playerName} scored ${count} ${goalsText}.`);
    }
}
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win.Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
const { team1, x: draw, team2 } = game.odds;

const moreLikelyTeam = team1 < team2 && 'Team 1' || 'Team 2';
console.log(`${moreLikelyTeam} is more likely to win.`);


// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
//     Then, call the function again with players from game.scored

Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.

Your tasks:

4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}

GOOD LUCK �

// 1. Loop over the game.scored array and print each player name to the console,
//     along with the goal number(Example: "Goal 1: Lewandowski")
for (let i = 0; i < game.score.length + 1; i++) {
    console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
const avarageOdd = (team1 + draw + team2) / 3;
console.log(avarageOdd);

const gameOdds = Object.values(game.odds);
let gameOddsTotal = 0;
for (let i = 0; i < gameOdds.length; i++) {
    gameOddsTotal += gameOdds[i]
}
console.log(gameOddsTotal / gameOdds.length);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
//     (except for "draw").Hint: Note how the odds and the game objects have the
// same property names �
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw : ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).

Your tasks:

GOOD LUCK �

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [];
for (const [time, event] of gameEvents) {
    events.push(event)
}

console.log(...new Set(events));

// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair.So remove this event from the game events log.
gameEvents.delete(64);

// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(`An event happened on an avarage of ${Array.from(gameEvents.keys()).pop() / gameEvents.size}`);

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF]17: ⚽ GOAL
for (const [time, event] of gameEvents) {
    const half = time <= 45 ? "FIRST" : "SECOND";
    console.log(`[${half}HALF] ${time} : ${event}`);
}

Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK �

document.body.append(document.createElement('textarea'));
const button = document.createElement('button');
button.textContent = 'Click Me';
document.body.appendChild(button);

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split("\n");
    console.log(rows);
    
    for (const row of rows) {
        const [first, second] = row.toLowerCase().trim().split("_");
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
        console.log(`${output.padEnd(25, " ")}${"✅".repeat(rows.indexOf(row) + 1)}`);
    }
})

Coding Challenge #12
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.

Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:

1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)

1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by

1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".

4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.

5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]

Hints: Use many of the tools you learned about in this and the last section �

GOOD LUCK �

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
    showResults() {
        console.log(`Poll results are : ${this.answers}`);
    },
    registerNewAnswer() {
        const userAnswer = Number(prompt(`${this.question}\n${this.options.join("\n")}`));
        typeof userAnswer === 'number' && userAnswer < this.answers.length && this.answers[userAnswer]++
        this.showResults();
    }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

poll.showResults.call({ answers: [5, 3, 2] });
poll.showResults.call({ answers: [5, 3, 2, 9, 9] });


Coding Challenge #2
This is more of a thinking challenge than a coding challenge �
Your tasks:

1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!

2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
    (function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    })();
GOOD LUCK �

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click', function () {
        header.style.color = "blue";
    })
})();

Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.

Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
�
")

4. Run the function for both test datasets

Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

Hints: Use tools from all lectures in this section so far �

GOOD LUCK �

*/
const checkDogs = function (dogsJulia, dogsKate) {
    const finalDogsJulia = dogsJulia.slice(1, -1);
    const allDogs = [...dogsKate, ...finalDogsJulia];

    for (let i = 0; i < allDogs.length; i++) {
        console.log(`Dog number ${i + 1} is ${allDogs[i] > 3 ? "🐕" : "🐶"} and ${allDogs[i]} yo`);
    }
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);