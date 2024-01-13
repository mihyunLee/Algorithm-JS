function solution(spell, dic) {
  return dic.filter((v) => spell.every((c) => v.includes(c))).length ? 1 : 2;
}

let spell = ["p", "o", "s"],
  dic = ["sod", "eocd", "qixm", "adio", "soo"];

console.log(solution(spell, dic));

// every()
// 콜백 함수가 모두 통과되는지 테스트하여 불리언 값으로 반환
