const fs = require("fs");

const stdin = Number(
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `5`
);

let blank = "";
let star = "";

for (let i = 1; i <= stdin; i++) {
  star += "*";
  for (let j = 1; j <= stdin - i; j++) {
    blank += " ";
  }
  console.log(blank + star);
  blank = "";
}
