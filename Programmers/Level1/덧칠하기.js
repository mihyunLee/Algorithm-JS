function solution(n, m, section) {
  let answer = 0;

  // 마지막에 칠한 위치
  let part = 0;

  // 칠해야 하는 구역 순회
  section.forEach((v) => {
    // 칠해야 하는 구역이 마지막 칠한 위치보다 크다면
    if (v > part) {
      // 구역을 칠해주고 마지막 칠한 위치를 저장
      part = v + m - 1;

      // 페인트를 칠했으니 1 증가
      answer++;
    }
  });

  return answer;
}

let n = 8,
  m = 4,
  section = [2, 3, 6];
console.log(solution(n, m, section));
