function solution(s1, s2) {
  const totalArr = s1.concat(s2);

  return totalArr.length - new Set(totalArr).size;
}

// filter 사용하기
function solution(s1, s2) {
  return s1.filter((el) => s2.includes(el)).length;
}

let s1 = ["a", "b", "c"],
  s2 = ["com", "b", "d", "p", "c"];

console.log(solution(s1, s2));
