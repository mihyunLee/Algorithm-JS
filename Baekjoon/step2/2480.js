const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6 2 5`
)
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const [x, y, z] = stdin;

if (x === y && y === z) {
  console.log(10000 + x * 1000);
} else if (x === y || y === z) {
  console.log(1000 + y * 100);
} else {
  console.log(z * 100);
}
