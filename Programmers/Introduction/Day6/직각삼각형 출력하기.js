const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  // 입력 받은 값을 처리하는 코드
  input = line.split(" ");
}).on("close", function () {
  // 입력이 끝나고 실행하는 코드
  for (let i = 1; i <= Number(input); i++) {
    console.log("*".repeat(i));
  }
});

/**
 * on(): 이벤트와 콜백 함수를 전달
 * 'line': 입력 받은 값을 한 줄씩 읽어 문자열 타입으로 전달
 * 'close': 인터페이스 종료. 무한히 입력 받는 것을 방지
 */
