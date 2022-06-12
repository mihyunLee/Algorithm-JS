const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `5
    54321`
).split("\n");

const N = Number(input[0]);
const num = input[1].trim();

let sum = 0;

for (let i = 0; i < N; i++) {
  sum += Number(num[i]);
}

console.log(sum);
