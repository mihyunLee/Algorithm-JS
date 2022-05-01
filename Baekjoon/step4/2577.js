// split
const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `150
      266
      427`
).split("\n");

const result = String(input[0] * input[1] * input[2]);

for (let i = 0; i < 10; i++) {
  console.log(result.split(i).length - 1);
}

// 2중 for문
const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `150
        266
        427`
).split("\n");

const result = String(input[0] * input[1] * input[2]);

for (let i = 0; i < 10; i++) {
  let count = 0;
  for (let j = 0; j < result.length; j++) {
    if (Number(result[j]) === i) {
      count++;
    }
  }
  console.log(count);
}
