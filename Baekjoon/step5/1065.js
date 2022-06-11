const input = Number(
  (process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `110`
  ).trim()
);

let N = input;

let count = 0;

for (let i = 1; i <= N; i++) {
  let num = String(i);

  if (i < 100) {
    count++;
    continue;
  }

  if (Number(num[1]) - Number(num[0]) === Number(num[2]) - Number(num[1])) {
    count++;
  }
}

console.log(count);
