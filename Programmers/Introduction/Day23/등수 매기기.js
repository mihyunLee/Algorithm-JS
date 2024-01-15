function solution(score) {
  const avg = score.map((v) => (v[0] + v[1]) / 2);

  return avg.map((v) => [...avg].sort((a, b) => b - a).indexOf(v) + 1);
}

// 다른 풀이
// 자신의 등수 = 자신보다 점수가 높은 사람의 수 + 1
function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}

let score = [
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
];

console.log(solution(score));
