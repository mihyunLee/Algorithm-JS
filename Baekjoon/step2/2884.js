// fs모듈 - 백준 런타임 에러 발생(해당 문제는 잘 동작됨)
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `23 40`
)
  .split(" ")
  .map(Number);

const [H, M] = stdin;

if (M >= 45) {
  console.log(H, M - 45);
} else {
  H != 0 ? console.log(H - 1, 15 + M) : console.log(23, 15 + M);
}

// readline 모듈
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input = line.split(" ").map((el) => parseInt(el));
}).on("close", function () {
  const [H, M] = input.map(Number);

  if (M >= 45) {
    console.log(H, M - 45);
  } else {
    H != 0 ? console.log(H - 1, 15 + M) : console.log(23, 15 + M);
  }

  process.exit();
});
