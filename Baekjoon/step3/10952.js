const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1 1
    2 3
    3 4
    9 8
    5 2
    0 0`
).split("\n");

let i = 0;
let answer = "";

while (stdin[i].trim() != "0 0") {
  const A = Number(stdin[i].split(" ")[0]);
  const B = Number(stdin[i].split(" ")[1]);
  answer += `${A + B}\n`;
  i++;
}
console.log(answer);
