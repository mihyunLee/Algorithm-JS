function solution(x, n) {
  let answer = [];
  let number = 0;

  for (let i = 0; i < n; i++) {
    answer.push((number += x));
  }
  return answer;
}
