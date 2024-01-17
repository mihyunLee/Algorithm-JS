function solution(num, total) {
  const mid = Math.ceil(total / num);
  const startNum = mid - Math.trunc(num / 2); // 홀수라면 중간 값의 앞에 (num / 2 - 1)개가 있고, 짝수라면 (num / 2)개가 있다.
  let result = [];

  for (let i = 0; i < num; i++) {
    result.push(i + startNum);
  }

  return result;
}

// 다른 풀이
// for문을 사용하지 않고 new Array로 결과 배열을 반환할 수 있다.
function solution(num, total) {
  const startNum = Math.ceil(total / num - Math.floor(num / 2));

  return new Array(num).fill(0).map((_, i) => {
    return i + startNum;
  });
}

// 다른 풀이 - 가우스 공식
// a ~ b 까지 숫자를 더한 합 = (a+b) * (b-a+1) * 1/2
// total = (a+b) * num * 1/ 2
// (2 * total / num) - b = a
// (2 * total / num) - num - a + 1 = a
// ((2 * total) / num + 1 - num) / 2 = a
function solution(num, total) {
  const a = ((2 * total) / num + 1 - num) / 2;
  return Array(num)
    .fill()
    .map((_, i) => i + a);
}

let num = 3,
  total = 12;

console.log(solution(num, total));
