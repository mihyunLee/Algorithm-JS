function solution(num1, num2) {
  return parseInt(num1 / num2);
}

let num1 = 7,
  num2 = 2;
console.log(solution(num1, num2));

/**
 * BigInt 자료형의 경우 / 연산을 했을 때
 * 언제나 소수점 이하를 버리게 되어 정수 값을 리턴한다.
 */
