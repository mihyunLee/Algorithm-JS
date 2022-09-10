function solution(numbers) {
  let scope = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return scope
    .filter((num) => numbers.indexOf(num) === -1)
    .reduce((acc, val) => acc + val);
}
