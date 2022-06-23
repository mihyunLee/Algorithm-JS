const input = Number(
  (process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `18`
  ).trim()
);

const N = input;
let count = [];

for (let i = 0; i <= N / 3; i++) {
  let bigBag = (N - 3 * i) / 5;

  if (Number.isInteger(bigBag)) {
    count.push(bigBag + i);
    continue;
  }
}

console.log(count.length === 0 ? -1 : count[0]);
