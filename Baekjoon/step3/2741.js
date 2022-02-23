const fs = require("fs");

const stdin = Number(
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `5`
);
let answer = "";

for (let i = 1; i <= stdin; i++) {
  answer += i + "\n";
}
console.log(answer);
