function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
}

let numbers = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
console.log(solution(numbers));
