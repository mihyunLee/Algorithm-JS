function solution(n) {
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i < dp.length; i++) {
    dp[i] = dp[i - 1] + 1;

    while (dp[i] % 3 === 0 || dp[i].toString().match(/3/g)) {
      dp[i] += 1;
    }
  }

  return dp[n];
}

// 다른 풀이 (1)
// 3으로 나누어지거나 3이 포함되어 있다면 그 수만큼 n을 늘려준다.
function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || String(i).includes("3")) n += 1;
  }
  return n;
}

// 다른 풀이 (2)
// 3의 배수와 저주받은 숫자 3을 제외한 숫자들을 나열하고, n번째 값 구하기
function solution(n) {
  return [...Array(n * 3)]
    .map((_, i) => i + 1)
    .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}

let n = 15;
console.log(solution(n));
