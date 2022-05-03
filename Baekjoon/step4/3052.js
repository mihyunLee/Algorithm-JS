const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `1
    2
    3
    4
    5
    6
    7
    8
    9
    10`
)
  .trim()
  .split("\n");

const count = new Set(input.map((num) => num % 42)).size;
console.log(count);
