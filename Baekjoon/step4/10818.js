const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `5
20 10 35 30 7`
).split("\n");

let count = Number(input[0]);
let numbers = input[1].split(" ").map(Number);

let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < count; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }

  if (min > numbers[i]) {
    min = numbers[i];
  }
}

console.log(`${min} ${max}`);
