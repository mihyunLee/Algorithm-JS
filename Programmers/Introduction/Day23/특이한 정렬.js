function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

let numlist = [1, 2, 3, 4, 5, 6],
  n = 4;
console.log(solution(numlist, n));
