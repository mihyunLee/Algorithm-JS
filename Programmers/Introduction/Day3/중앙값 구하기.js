function solution(array) {
  const sortedArray = array.sort((a, b) => a - b);

  return sortedArray[Math.floor(array.length / 2)];
}

let array = [1, 2, 7, 10, 11];
console.log(solution(array));

/**
 * Array.prototype.at()
 *
 * 정수값을 받아 해당 인덱스에 있는 항목을 반환하며,
 * 양수와 음수를 사용할 수 있다.
 * 기존 배열에서 arr[0]을 사용하면 음수 값을 사용할 수 없지만,
 * at() 메서드는 음수값을 사용할 수 있다는 장점이 있다.
 */
