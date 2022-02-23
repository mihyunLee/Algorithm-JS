const fs = require("fs");

const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `2`
).trim();

const num = Number(stdin);

for (let i = 1; i < 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
