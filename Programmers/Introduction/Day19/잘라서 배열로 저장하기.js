function solution(my_str, n) {
  let answer = [];

  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.slice(i, i + n));
  }

  return answer;
}

// 정규표현식 사용
// . : 모든 문자열 탐색
// {a, b} : a개 이상 b개 이하씩 탐색
function solution(my_str, n) {
  let reg = new RegExp(`.{1,${n}}`, "g");
  return my_str.match(reg);
}

let my_str = "abc1Addfggg4556b",
  n = 6;
console.log(solution(my_str, n));
