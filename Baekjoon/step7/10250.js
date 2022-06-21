const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `2
    6 12 10
    30 50 72`
).split("\n");

const T = input[0];

for (let i = 1; i <= T; i++) {
  let [H, W, N] = input[i].trim().split(" ").map(Number);

  let Y = N % H === 0 ? H : N % H;
  let X = Math.ceil(N / H);

  X < 10 ? console.log(`${Y}0${X}`) : console.log(`${Y}${X}`);
}
