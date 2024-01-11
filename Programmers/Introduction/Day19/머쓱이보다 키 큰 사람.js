function solution(array, height) {
  return array.filter((v) => v > height).length;
}

let array = [149, 180, 192, 170],
  height = 167;

console.log(solution(array, height));
