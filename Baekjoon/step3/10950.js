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

const count = Number(stdin[0]);

for (let i = 1; i < count + 1; i++) {
  const A = Number(stdin[i].split(" ")[0]);
  const B = Number(stdin[i].split(" ")[1]);
  console.log(A + B);
}
