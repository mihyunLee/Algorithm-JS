const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
    1 1
    12 34
    5 500
    40 60
    1000 1000`
).split("\n");

const count = Number(stdin[0]);
let answer = "";

for (let i = 1; i <= count; i++) {
  let num = stdin[i].split(" ");
  answer += Number(num[0]) + Number(num[1]) + "\n";
}
console.log(answer);
