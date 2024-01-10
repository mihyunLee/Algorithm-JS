function solution(numbers) {
  const table = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  table.forEach((el, idx) => {
    numbers = numbers.replaceAll(el, idx);
  });

  return parseInt(numbers);
}

let numbers = "onetwothreefourfivesixseveneightnine";
console.log(solution(numbers));
