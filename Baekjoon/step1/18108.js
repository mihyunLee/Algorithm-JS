const fs = require("fs");

const year = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2541`
).trim();

console.log(year - 544 + 1);
