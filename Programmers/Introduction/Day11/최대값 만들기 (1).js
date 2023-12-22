function solution(numbers) {
  const sortedNumbers = numbers.sort((a, b) => b - a);

  return sortedNumbers[0] * sortedNumbers[1];
}

// 구조분해 할당으로 깔끔하게 풀이하기
function solution(numbers) {
  const [a, b] = numbers.sort((a, b) => b - a);

  return a * b;
}

console.log(solution(numbers));

let numbers = [1, 2, 3, 4, 5];
console.log(solution(numbers));
