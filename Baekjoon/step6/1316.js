const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `2
    aabb
    abc
    `
).split("\n");

const N = Number(input[0]);
let count = 0;

for (let i = 1; i <= N; i++) {
  let isGroupWord = []; // 각 문자가 연속으로 나타나는만큼 true 요소를 가지고 있는 배열
  const word = input[i].trim().split(""); // 주어진 단어

  for (let j = 0; j < word.length; j++) {
    // 단어의 문자가 연속해서 나타나는지 확인

    let indexArr = []; // 지정된 문자가 나타나는 모든 인덱스를 가지고 있는 배열
    let index = word.indexOf(word[j]); // 문자에서 찾은 지정된 문자의 첫 번째 인덱스

    while (index != -1) {
      // 인덱스 검색 시작점을 1씩 증가해가면서
      // 지정된 문자의 모든 인덱스를 indexArr에 저장
      indexArr.push(index);
      index = word.indexOf(word[j], index + 1);
    }

    if (indexArr.length === 1) {
      // 찾은 인덱스 배열의 길이가 1일때 즉, 특정 문자가 하나만 존재할 때
      // isGroupWord에 true 요소를 넣는다.
      isGroupWord.push(true);
    } else {
      let isSequence = [];

      for (let m = 0; m < indexArr.length - 1; m++) {
        if (indexArr[m] + 1 === indexArr[m + 1]) {
          // 지정 문자의 인덱스가 연속된 숫자라면 isSequence에 인덱스 요소를 넣는다.
          isSequence.push(indexArr[m]);
        }
      }
      // 인덱스가 연속된 숫자일 때 두 배열의 길이를 비교해서 조건에 맞다면
      // isGroupWord에 true 요소를 넣는다.
      // ex) isSeqeuence = [2], indexArr = [2, 3] 이면, length는 1차이
      // ex) isSequenece = [1], indexArr = [1, 2, 5] 이면 length는 1차이 X
      isSequence.length + 1 === indexArr.length && isGroupWord.push(true);
    }
  }

  // 각 문자가 연속해서 나타난다면,
  // 단어의 길이와 각 문자의 연속하는지 알고 있는 배열의 길이가 같을 것이므로
  // 조건에 부합할 때 count를 증가한다.
  isGroupWord.filter((item) => item === true).length === word.length && count++;
}

console.log(count);
