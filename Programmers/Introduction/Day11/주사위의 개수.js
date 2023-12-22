function solution(box, n) {
  return box.map((v) => Math.floor(v / n)).reduce((acc, val) => acc * val, 1);
}

// reduce 하나로 줄이기
function solution(box, n) {
  return box.reduce((acc, v) => acc * Math.floor(v / n), 1);
}

let box = [10, 8, 6],
  n = 3;

console.log(solution(box, n));
