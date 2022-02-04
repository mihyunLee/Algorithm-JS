const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `joonas`
).trim();

console.log(`${stdin}??!`);
