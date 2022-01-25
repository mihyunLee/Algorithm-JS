const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 2`
).split(" ");

// A - B
console.log(parseInt(input[0]) - parseInt(input[1]));
