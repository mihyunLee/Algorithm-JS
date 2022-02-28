const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
    1 1
    2 3
    3 4
    9 8
    5 2`
).split("\n");

const T = Number(stdin[0]);
let answer = "";

for (let i = 1; i <= T; i++) {
  let input = stdin[i].split(" ");
  answer += `Case #${i}: ${input[0]} + ${input[1]} = ${
    Number(input[0]) + Number(input[1])
  }\n`;
}

console.log(answer);
