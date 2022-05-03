const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `3
    10 20 30`
).split("\n");

const count = input[0];
const score = input[1].split(" ");
const max = Math.max(...score);

let sum = 0;

for (let i = 0; i < score.length; i++) {
  sum += (score[i] / max) * 100;
}

console.log(sum / count);
