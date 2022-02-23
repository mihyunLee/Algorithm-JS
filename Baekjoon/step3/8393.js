const fs = require("fs");

const stdin =
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `3`;

const n = Number(stdin);
let sum = 0;

for (let i = 1; i < n + 1; i++) {
  sum += i;
}

console.log(sum);
