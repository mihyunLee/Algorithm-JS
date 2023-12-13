function solution(n) {
  let cnt = 1;

  while ((cnt * n) % 6 !== 0) {
    cnt++;
  }

  return (cnt * n) / 6;
}

// 가독성 있게 고치기
function solution(n) {
  let piece = 6;

  while (piece % n !== 0) {
    piece += 6;
  }

  return piece / 6;
}

let n = 6;

console.log(solution(n));
