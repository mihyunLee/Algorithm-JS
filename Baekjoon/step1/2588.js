const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `472
    385`
).split("\n");

const [num1, num2] = input;

const oneNum = num2 % 10;
const tenNum = Math.floor((num2 % 100) / 10);
const hundredNum = Math.floor(num2 / 100);

//console.log(`${oneNum}, ${tenNum}, ${hundredNum}`);
//결과값이 5, 8.5, 3.85 이므로 Math.floor() 사용

console.log(num1 * oneNum);
console.log(num1 * tenNum);
console.log(num1 * hundredNum);
console.log(num1 * num2);
