function solution(array, n) {
  return array.filter((v) => v === n).length;
}

let array = [1, 1, 2, 3, 4, 5],
  n = 1;

console.log(solution(array, n));
