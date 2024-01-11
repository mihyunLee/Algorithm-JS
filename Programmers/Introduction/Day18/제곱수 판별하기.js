function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

let n = 144;
console.log(solution(n));

// Number.isInteger() : 정수 판별
