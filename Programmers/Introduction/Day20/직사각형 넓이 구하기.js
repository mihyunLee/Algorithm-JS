function solution(dots) {
  const [dots1, dots2, dots3] = dots.sort(([a], [c]) => a - c);

  return (dots3[0] - dots1[0]) * (dots2[1] - dots1[1]);
}

// 다른 풀이
// x, y 좌표를 모은 후, 넓이 계산
function solution(dots) {
  const x = dots.map((v) => v[0]);
  const y = dots.map((v) => v[1]);

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}

let dots = [
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
];
console.log(solution(dots));
