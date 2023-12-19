function solution(numbers, num1, num2) {
  return numbers.splice(num1, num2 - num1 + 1);
}

let numbers = [1, 3, 5],
  num1 = 1,
  num2 = 2;
console.log(solution(numbers, num1, num2));
