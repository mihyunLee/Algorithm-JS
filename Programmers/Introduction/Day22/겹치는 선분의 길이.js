// 배열 초기화
// lines 정보를 arr 배열에 적용
// arr 배열에서 겹친 부분(값이 1보다 큰 부분) 카운트

function solution(lines) {
  // 시작점과 끝점 [a, b]는 -100 <= a < b <= 100 이므로
  // 각 점에 100을 더하면 0~200 사이의 범위를 갖는다.
  let arr = new Array(200).fill(0);

  // 각 점들에 해당하는 인덱스를 1씩 증가한다.
  // [-1, 1], [1, 3]의 경우 1이라는 점이 동일하지만
  // 선분이 겹쳐지지는 않으므로 for문에서 i < b 조건을 사용한다.
  lines.forEach(([a, b]) => {
    for (let i = a; i < b; i++) {
      arr[i + 100]++;
    }
  });

  // 2이상인 점들을 카운트 한다. (1의 경우 겹쳐지지 않은 것)
  return arr.filter((v) => v > 1).length;
}

let lines = [
  [-1, 1],
  [1, 3],
  [3, 9],
];

console.log(solution(lines));
