const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `1
    10
    13
    100
    1000
    10000
    100000
    0`
)
  .split("\n")
  .map(Number);

let i = 0;

while (input[i] !== 0) {
  const n = input[i];
  const isPrimeNumber = new Array(n * 2 + 1).fill(true);
  isPrimeNumber[0] = isPrimeNumber[1] = false;

  for (let i = 2; i <= Math.ceil(Math.sqrt(n * 2)); i++) {
    if (!isPrimeNumber[i]) {
      continue;
    }

    for (let j = i * 2; j <= n * 2; j += i) {
      isPrimeNumber[j] = false;
    }
  }

  const results = [];

  for (let i = n + 1; i <= n * 2; i++) {
    if (isPrimeNumber[i]) {
      results.push(i);
    }
  }

  console.log(results.length);

  i++;
}
