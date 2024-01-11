function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

let str1 = "ab6CDE443fgh22iJKlmn1o",
  str2 = "6CD";
console.log(solution(str1, str2));
