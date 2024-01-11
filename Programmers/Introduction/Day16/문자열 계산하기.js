function solution(my_string) {
  return eval(my_string);
}

let my_string = "3 + 4";
console.log(solution(my_string));

// eval은 보안상의 이유로 사용하지 않는 것이 좋다.

// 다른 풀이
// 문제가 덧셈, 뺄셈만 존재하므로 음수나 양수의 덧셈과 같다.
function solution(my_string) {
  const stack = [];

  let flag = 1;

  for (const ch of my_string.split(" ")) {
    if (ch === "+") {
      flag = 1;
    } else if (ch === "-") {
      flag = -1;
    } else {
      stack.push(ch * flag);
    }
  }

  return stack.reduce((acc, val) => acc + val, 0);
}
