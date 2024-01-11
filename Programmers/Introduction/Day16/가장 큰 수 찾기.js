function solution(array) {
  const max = Math.max(...array);

  return [max, array.indexOf(max)];
}

let array = [1, 8, 3];

console.log(solution(array));
