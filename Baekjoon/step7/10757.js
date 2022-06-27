const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `9223372036854775807 9223372036854775808`
).split(" ");

const [A, B] = input.map(BigInt);

console.log((A + B).toString());
