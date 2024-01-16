function solution(i, j, k) {
  let answer = 0;

  for (let m = i; m <= j; m++) {
    answer += [...m.toString()].filter((v) => +v === k).length;
  }

  return answer;
}

// 다른 풀이 - split 사용

function solution(i, j, k) {
  let a = "";

  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}

let i = 1,
  j = 13,
  k = 1;

console.log(solution(i, j, k));
