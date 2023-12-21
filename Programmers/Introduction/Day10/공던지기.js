function solution(numbers, k) {
  // 공을 던지는 사람이므로 k-1 해주기
  return numbers[((k - 1) * 2) % numbers.length];
}

let numbers = [1, 2, 3, 4],
  k = 2;

console.log(solution(numbers, k));

/**
 * numbers의 길이를 초과하는 경우 다시 첫째항부터 시작하는 경우
 * 위와 같은 공식을 사용할 수 있다!
 */
