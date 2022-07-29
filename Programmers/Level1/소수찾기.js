function solution(n) {
  const isPrime = new Array(n + 1).fill(true).fill(false, 0, 2);

  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (!isPrime[i]) {
      continue;
    }

    for (let j = i * 2; j <= n; j += i) {
      isPrime[j] = false;
    }
  }

  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (isPrime[i]) {
      count++;
    }
  }

  return count;
}
