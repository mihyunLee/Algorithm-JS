const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `2
    6 12 10
    30 50 72`
).split("\n");

const T = input[0];

for (let i = 1; i <= T; i++) {
  let Y = 0,
    X = 0;
  let [H, W, N] = input[i].trim().split(" ").map(Number);

  Y = N % H === 0 ? H : N % H;
  X = N / H < 10 ? `0${Math.ceil(N / H)}` : Math.ceil(N / H);

  console.log(`${Y}${X}`);
}
