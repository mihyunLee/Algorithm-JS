const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `3
    10 20 30`
).split("\n");

const count = input[0];
const score = input[1].split(" ").sort((a, b) => b - a);
const max = score[0];

console.log(score.map((a) => (a / max) * 100).reduce((a, b) => a + b) / count);
