const fs = require("fs");

const input = Number(
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `26`
);

let num = input;
let sum,
  count = 0;

while (true) {
  sum = parseInt(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);
  count++;
  if (num === input) break;
}

console.log(count);
