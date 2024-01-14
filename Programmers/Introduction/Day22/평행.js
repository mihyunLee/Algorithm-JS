// 기울기 = y좌표 변화량 / x좌표 변화량
function solution(dots) {
  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;

  // 1-2, 3-4
  if ((y1 - y2) / (x1 - x2) === (y3 - y4) / (x3 - x4)) return 1;

  // 1-3, 2-4
  if ((y1 - y3) / (x1 - x3) === (y2 - y4) / (x2 - x4)) return 1;

  // 1-4, 2-3
  if ((y1 - y4) / (x1 - x4) === (y2 - y3) / (x2 - x3)) return 1;

  return 0;
}

let dots = [
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
];
console.log(solution(dots));
