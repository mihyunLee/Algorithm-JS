function solution(my_string) {
  return (
    my_string.match(/\d+/g)?.reduce((acc, val) => acc + parseInt(val), 0) || 0
  );
}

let my_string = "aAb1B2cC34oOp";
console.log(solution(my_string));

/**
 * 정규 표현식 '+'
 * 1회 이상 연속으로 반복되는 문자에 가능한 많이 일치
 * {1,}와 동일
 */
