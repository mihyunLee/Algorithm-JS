function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, val) => acc + parseInt(val), 0);
}

let n = 1234;
console.log(solution(n));
