const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `72`
).trim();

const N = Number(input);
let remainderNum = N;

let i = 2;

while (remainderNum !== 1) {
  if (remainderNum % i === 0) {
    remainderNum /= i;
    console.log(i);

    i = 2;
  } else {
    i++;
  }
}
