/**
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출
력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
문자열의 길이는 100을 넘지 않는다.

▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

▣ 입력예제 1
teachermode e

▣ 출력예제 1
1 0 1 2 1 0 1 2 2 1 0
 */

function solution(str) {
  let [s, t] = str.split(" ");
  let count = 0;
  let answer = [];

  // 왼 -> 오 방향으로 문자열 탐색
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      count = 0;
    } else {
      count++;
    }

    answer.push(count);
  }

  // 오 -> 왼 방향으로 문자열 탐색
  count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      count = 0;
    } else {
      count++;
      answer[i] = Math.min(answer[i], count);
    }
  }

  return answer.join(" ");
}

let str = "teachermode e";

console.log(solution(str));
