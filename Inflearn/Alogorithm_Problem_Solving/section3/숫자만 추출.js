/**
문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만
듭니다.
만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205
이 됩니다.
추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.

▣ 입력설명
첫 줄에 숫자가 섞인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.

▣ 출력설명
첫 줄에 자연수를 출력합니다.

▣ 입력예제 1
g0en2T0s8eSoft

▣ 출력예제 1
208
*/

function solution(str) {
  const reg = /[a-z]/g;
  const outOfStr = str.toLowerCase().replace(reg, "");

  return parseInt(outOfStr);
}

let str = "g0en2T0s8eSoft";

console.log(solution(str));

/**
 * 다른 풀이 - isNaN 사용
 * isNaN - 주어진 값이 NaN(Not a Number)이면 true, 그렇지 않다면 false 반환
 * Number.isNaN - Number이면서 isNaN이면 true, 그렇지 않다면 false
 */

function solution(str) {
  let answer = "";

  for (let s of str) {
    if (!isNaN(s)) answer += s;
  }

  return parseInt(answer);
}

console.log(solution(str));
