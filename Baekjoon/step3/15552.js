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

for (let i = 1; i < count + 1; i++) {
  const A = Number(stdin[i].split(" ")[0]);
  const B = Number(stdin[i].split(" ")[1]);
  answer += A + B + "\n";
}
console.log(answer);
