const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `5
    20 10 35 30 7`
).split("\n");

let count = Number(input[0]);
let numbers = input[1].split(" ").map(Number);

numbers.sort((a, b) => a - b);

console.log(`${numbers[0]} ${numbers[count - 1]}`);
