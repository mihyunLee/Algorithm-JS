const fs = require("fs");

const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : `5
    20 10 35 30 7`;

let count = Number(input[0]);
let numbers = input[1].split(" ").map(Number);

let min,
  max = numbers[0];

for (let i = 1; i < count; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  if (min > numbers[i]) {
    min = numbers[i];
  }
}

console.log(`${min} ${max}`);
