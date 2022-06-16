const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `3
      happy
      new
      year`
).split("\n");

const N = Number(input[0]);
let count = 0;

for (let i = 1; i <= N; i++) {
  const word = input[i].trim();
  const letter = []; // 처음 발견되는 문자의 배열
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) {
      // 처음 발견되는 문자일 경우
      letter.push(word[j]);
    } else {
      // 처음 발견되지 않은 문자일 경우
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        // 특정 문자가 연속되어 나왔다면 그 문자는 letter 배열의 마지막 요소이다.
        // 따라서 특정 문자가 처음 인덱스와 letter 배열의 마지막 요소가 다르다면
        // 이전에 한번 발견되고 다시 발견된 경우이므로 그룹 단어가 아니다.
        isGroupWord = false;
        break;
      }
    }
  }
  if (isGroupWord) {
    count++;
  }
}

console.log(count);
