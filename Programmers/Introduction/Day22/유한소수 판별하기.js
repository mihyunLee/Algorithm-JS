// 기약 분수 - 분자와 분모가 서로소인것
// 유한소수 - 분모의 소인수가 2와 5만 존재

// 접근 방식 - 최대 공약수로 약분 -> 기약 분수
// 정수 -> 유한 소수

// 최대 공약수 구하기
// 유클리드 호제법
// num1를 num2로 나눈 나머지를 r이라고 했을 때,
// GCD(num1, num2) = GCD(num2, r)과 같다.
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function solution(a, b) {
  b /= gcd(a, b);

  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}

// 다른 풀이
// 소수점 아래 10자리 표기한 수와 a / b가 같다면, 유한소수 아니면 무한소수
function solution(a, b) {
  return Number((a / b).toFixed(10)) == a / b ? 1 : 2;
}

let a = 7,
  b = 20;
console.log(solution(a, b));
