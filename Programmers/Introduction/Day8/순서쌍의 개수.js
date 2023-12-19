function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }

  return count;
}

let n = 20;

console.log(solution(n));

/**
 * 약수의 개수는 순서쌍의 개수와 같다.
 */
