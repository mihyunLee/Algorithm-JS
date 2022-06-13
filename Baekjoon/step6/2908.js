const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `734 893`
)
  .trim()
  .split(" ");

const [num1, num2] = input.map((item) => item.split("").reverse().join(""));

console.log(num1 > num2 ? num1 : num2);
