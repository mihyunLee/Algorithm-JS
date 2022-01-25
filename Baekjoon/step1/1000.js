const fs = require("fs");

// 실행중인 프로세스가 linux라면 stdin을 통해 입력을 읽어 들이고,
// 그렇지 않으면 입력한 예제 적용
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1 2`
).split(" ");

// A + B
console.log(parseInt(stdin[0]) + parseInt(stdin[1]));
