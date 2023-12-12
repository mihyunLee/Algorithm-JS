function solution(num1, num2) {
  return parseInt((num1 / num2) * 1000);
}

let num1 = 3,
  num2 = 2;
console.log(solution(num1, num2));

/**
 * parseInt 와 Math.floor의 차이
 *
 * Math.floor는 '내림'한 정수값을 반환하고 parseInt는 소수점 부분을 버린 정수값을 반환한다.
 * 양수일 때는 둘의 차이가 없지만 음수일 경우 같은 수에도 다른 결과값이 나올 수 있으므로 주의해야 한다.
 */
