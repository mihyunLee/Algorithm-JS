function solution(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);

  return Math.max(
    sortedNumbers[0] * sortedNumbers[1],
    sortedNumbers.at(-1) * sortedNumbers.at(-2)
  );
}

let numbers = [1, 2, -3, 4, -5];
console.log(solution(numbers));
