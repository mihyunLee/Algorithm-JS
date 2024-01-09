function solution(my_string) {
  const vowelsReg = /[aeiou]/g;

  return my_string.replace(vowelsReg, "");
}

let my_string = "bus";
console.log(solution(my_string));

/**
 * 정규표현식에 'g'가 없을 경우 replaceAll로 대체가능하며
 * 'g'가 있을 때에는 replace를 사용해도 된다.
 */
