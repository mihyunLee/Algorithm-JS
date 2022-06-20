const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `100 99 1000000000`
)
  .trim()
  .split(" ");

const [A, B, V] = input;

let repeat = Math.ceil((V - A) / (A - B));
let day = repeat + 1;

console.log(day);
