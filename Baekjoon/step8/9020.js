const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `3
      8
      10
      16`
)
  .split("\n")
  .map(Number);

let i = 1;

while (i <= input[0]) {
  let n = input[i];

  const isPrimeNumber = new Array(n + 1).fill(true);
  isPrimeNumber[0] = isPrimeNumber[1] = false;

  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (!isPrimeNumber[i]) {
      continue;
    }

    for (let j = i * 2; j <= n * 2; j += i) {
      isPrimeNumber[j] = false;
    }
  }

  const primeNumber = [];

  for (let i = 2; i < n; i++) {
    if (isPrimeNumber[i]) {
      primeNumber.push(i);
    }
  }

  const partition = [];

  for (let i = 0; primeNumber[i] <= n / 2; i++) {
    const index = primeNumber.indexOf(n - primeNumber[i]);
    if (index !== -1) {
      partition.push([primeNumber[i], primeNumber[index]]);
    }
  }

  const answer = partition.pop();

  console.log(`${answer[0]} ${answer[1]}`);

  i++;
}
