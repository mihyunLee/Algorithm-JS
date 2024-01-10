// 나의 풀이
// key는 원 배열의 원소 값, value는 주어진 수와의 차이인 객체 정의
// 해당 객체를 key 값이 작은 순으로, value 값이 작은 순으로 정렬
function solution(array, n) {
  const diff = array.reduce((acc, val) => {
    return { ...acc, [val]: Math.abs(n - val) };
  }, {});

  return parseInt(
    Object.entries(diff).sort(([a, b], [c, d]) => a - c && b - d)
  );
}

// 더 간단한 방법, 절대값으로 정렬하기
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}

let array = [28, 10, 12],
  n = 20;
console.log(solution(array, n));
