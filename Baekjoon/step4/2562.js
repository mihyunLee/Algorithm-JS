const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `3
    29
    38
    12
    57
    74
    40
    85
    61`
)
  .split("\n")
  .map(Number);

let count = 0;
let max = input[0];

for (let i = 1; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    count = i;
  }
}

console.log(max);
console.log(count + 1);
