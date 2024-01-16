function solution(i, j, k) {
  let answer = 0;

  for (let m = i; m <= j; m++) {
    answer += [...m.toString()].filter((v) => +v === k).length;
  }

  return answer;
}

// 다른 풀이 - split 사용
// split을 사용하면 구분자의 개수 보다 항상 1이 많다.

function solution(i, j, k) {
  let a = "";

  for (i; i <= j; i++) {
    a += i;
  }

  // a = 12345678910111213
  // a.split('1')
  // [ '', '23456789', '0', '', '', '2', '3' ]

  return a.split(k).length - 1;
}

let i = 1,
  j = 13,
  k = 1;

console.log(solution(i, j, k));
