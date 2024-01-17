function solution(M, N) {
  return M * N === 1 ? 0 : M - 1 + (N - 1) * M;
}

// 더 간단한 풀이
// 나눠진 총 조각의 개수는 M * N 개
// 마지막 조각을 제외하면 조각의 개수만큼 가위질이 필요하므로 -1
function solution(M, N) {
  return M * N - 1;
}

let M = 2,
  N = 2;
console.log(solution(M, N));
