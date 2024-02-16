function solution(k, m, score) {
  let profit = 0;

  score.sort((a, b) => b - a);

  for (let i = 0; i <= score.length - m; i += m) {
    profit += Math.min(...score.slice(i, i + m)) * m;
  }

  return profit;
}

// slice 사용 줄이기
// 오름차순 정렬 후 가장 작은 수만 뽑아 사용하기
function solution(k, m, score) {
  let profit = 0;

  const sortedScore = score.sort().slice(score.length % m);

  for (let i = 0; i <= sortedScore.length - m; i += m) {
    profit += sortedScore[i] * m;
  }

  return profit;
}

let k = 4,
  m = 3,
  score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];
console.log(solution(k, m, score));
