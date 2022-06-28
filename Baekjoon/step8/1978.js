const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `4
    1 3 5 7`
).split("\n");

const num = input[1].trim().split(" ");
let count = 0;

for (let i = 0; i < input[0]; i++) {
  let arr = [];

  if (Number(num[i]) === 1) {
    continue;
  }

  for (let j = 2; j <= num[i]; j++) {
    num[i] % j === 0 && arr.push(j);
  }

  arr.length === 1 && count++;
}

console.log(count);
