function solution(n) {
  let arr = Array.from({ length: n }, (v, i) => i + 1);

  return arr.reduce((acc, val) => (val % 2 === 0 ? acc + val : acc), 0);
}

let n = 10;
console.log(solution(n));
