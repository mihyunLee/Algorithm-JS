const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7 3`
).split(" ");

console.log(parseInt(stdin[0]) + parseInt(stdin[1]));
console.log(parseInt(stdin[0]) - parseInt(stdin[1]));
console.log(parseInt(stdin[0]) * parseInt(stdin[1]));
console.log(parseInt(parseInt(stdin[0]) / parseInt(stdin[1])));
console.log(parseInt(stdin[0]) % parseInt(stdin[1]));
