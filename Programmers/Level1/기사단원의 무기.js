function countPrime(n) {
  let count = 0;

  // Point: 제곱근의 약수 개수 구하고, 나눠진 값도 약수이므로 카운트하기
  // 1부터 n까지 범위보다 훨씬 효율적!!
  // 참고: https://mine-it-record.tistory.com/522
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++;
      if (n / i != i) count++;
    }
  }

  return count;
}

function solution(number, limit, power) {
  const arr = Array.from({ length: number }, (_, i) => i + 1);

  return arr.reduce((acc, val) => {
    let count = countPrime(val);

    return acc + (count > limit ? power : count);
  }, 0);
}

let number = 5,
  limit = 3,
  power = 2;
console.log(solution(number, limit, power));
