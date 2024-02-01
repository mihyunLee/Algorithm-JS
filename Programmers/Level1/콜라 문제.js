function solution(a, b, n) {
  let totalColar = 0;

  while (n >= a) {
    let give = Math.floor(n / a);
    n = n - a * give + b * give;
    totalColar += b * give;
  }

  return totalColar;
}

// 나머지 활용
function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    answer += parseInt(n / a) * b;
    n = parseInt(n / a) * b + (n % a);
  }

  return answer;
}

// 풀이: https://blog.naver.com/doctorgu/222992407249
// 유사 문제: https://school.programmers.co.kr/learn/courses/30/lessons/120884
function solution(a, b, n) {
  return Math.floor(Math.max(n - b, 0) / (a - b)) * b;
}

let a = 2,
  b = 1,
  n = 20;
console.log(solution(a, b, n));
