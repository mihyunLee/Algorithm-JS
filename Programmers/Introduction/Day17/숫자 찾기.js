function solution(num, k) {
  return num.toString().indexOf(k) + 1 || -1;
}

let num = 29183,
  k = 1;
console.log(solution(num, k));
