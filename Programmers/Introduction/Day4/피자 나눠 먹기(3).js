function solution(slice, n) {
  return Math.ceil(n / slice);
}

let slice = 7,
  n = 10;
console.log(solution(slice, n));
