function solution(my_string) {
  return [...new Set([...my_string])].join("");
}

// ? Set 자료구조를 만들 때 굳이 스프레드 연산자로 전달하지 않아도 된다.
function solution(my_string) {
  return [...new Set(my_string)].join("");
}

let my_string = "people";

console.log(solution(my_string));
