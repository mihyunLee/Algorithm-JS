const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `64
    65`
).split("\n");

const [M, N] = input.map(Number);
let primeNumber = [];

for (let i = M; i <= N; i++) {
  let arr = [];

  if (i === 1) {
    continue;
  }

  for (let j = 2; j <= i; j++) {
    i % j === 0 && arr.push(j);
  }

  arr.length === 1 && primeNumber.push(i);
}

if (primeNumber.length > 0) {
  console.log(primeNumber.reduce((a, b) => a + b, 0));
  console.log(primeNumber[0]);
} else {
  console.log(-1);
}
