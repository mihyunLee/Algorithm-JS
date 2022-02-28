const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10 5
    1 10 4 9 2 3 8 5 7 6`
).split("\n");

const [N, X] = stdin[0].split(" ").map(Number);
const A = stdin[1].split(" ");
let answer = [];

for (let i = 0; i < N; i++) {
  A[i] < X ? answer.push(A[i]) : "";
}
console.log(answer.join(" "));
