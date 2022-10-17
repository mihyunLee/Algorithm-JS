// Run by Node.js
function solution(input) {
  let answer = [...new Set(input)];

  if (answer.length === 2) {
    if (answer[0] === 1 && answer[1] === 3) {
      console.log(input.filter((el) => el === 1).length);
    } else {
      console.log(input.filter((el) => el === Math.max(...input)).length);
    }
  } else {
    console.log(0);
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let list = [];

rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  list = input.split(" ").map(Number);
  solution(list);
  process.exit();
});
