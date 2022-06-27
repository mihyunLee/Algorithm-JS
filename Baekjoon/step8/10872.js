const input = Number(
  (process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `10`
  ).trim()
);

const N = input;

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(N));
