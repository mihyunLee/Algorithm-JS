function solution(n, k) {
  return 12000 * n + 2000 * (k - Math.trunc(n / 10));
}

let n = 10,
  k = 3;
console.log(solution(n, k));
