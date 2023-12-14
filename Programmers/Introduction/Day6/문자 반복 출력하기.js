function solution(my_string, n) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    answer += my_string[i].repeat(n);
  }

  return answer;
}

// map을 사용하여 문자열을 변경하는 방법
function solution(my_string, n) {
  let answer = [...my_string].map((el) => el.repeat(n)).join("");

  return answer;
}

let my_string = "hello",
  n = 3;

console.log(solution(my_string, n));
