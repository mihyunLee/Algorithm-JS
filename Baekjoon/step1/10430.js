const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 8 4`
)
  .split(" ")
  .map(Number);

const [A, B, C] = input;

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
