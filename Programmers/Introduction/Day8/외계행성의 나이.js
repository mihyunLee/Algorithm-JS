function solution(age) {
  return age
    .toString()
    .split("")
    .map((el) => String.fromCharCode(Number(el) + 97))
    .join("");
}

// 한자리 숫자는 0 ~ 9까지인걸 감안하여 풀이에 적용
function solution(age) {
  return age
    .toString()
    .split("")
    .map((el) => "abcdefghij"[el])
    .join("");
}

let age = 23;
console.log(solution(age));
