const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 5 `
).split(" ");

// A / B
console.log(parseInt(input[0]) / parseInt(input[1]));
