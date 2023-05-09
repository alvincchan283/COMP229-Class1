// use let keyword to create 2 variables.
let num1 = 5;
let num2 = 10;

// 2 types of function (regular & arrow)
// pass values with variables & array (spread keywords)

function sum(num1, num2) {
    return num1 + num2;
}

// Arrow function
let sum2 = (a, b) => a + b;

// Const arrow function
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;

function sumArray(...numArray) {
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
}

const sumArrayArrow = (...numArray) => {
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
}

console.log(sum(num1, num2));

// Spread keyword
console.log(sum(...[4, 3]));
console.log(sub(...[4, 3]));
console.log(mul(...[4, 3]));