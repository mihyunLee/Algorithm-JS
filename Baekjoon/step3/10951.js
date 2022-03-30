const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1 1
    2 3
    3 4
    9 8
    5 2`
).split("\n");

let i = 0;

while (i < stdin.length - 1) {
  let numbers = stdin[i].split(" ").map(Number);
  console.log(`${numbers[0] + numbers[1]}`);
  i++;
}
