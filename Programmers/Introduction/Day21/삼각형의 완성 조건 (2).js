function solution(sides) {
  let result = 0;

  sides.sort((a, b) => a - b);

  // (1) 다른 한 변이 가장 길 때
  for (let i = sides[1]; i < sides[0] + sides[1]; i++) {
    result++;
  }

  // (2) 주어진 변 중에 하나가 가장 길 때
  for (let i = sides[1] - 1; i > sides[1] - sides[0]; i--) {
    result++;
  }

  return result;
}

// for문 하나 줄이기
// i까지 합친 배열을 정렬시키고, 한 변이 다른 두 변의 합보다 작은 경우만 카운트
function solution(sides) {
  let a = Math.min(...sides);
  let b = Math.max(...sides);
  // let [a, b] = sides.sort((a, b) => a - b);
  let result = 0;

  for (let i = 1; i < a + b; i++) {
    let arr = [a, b, i].sort((a, b) => a - b);
    let [q, w, e] = arr;
    if (q + w > e) {
      result++;
    }
  }

  return result;
}

// 다르게 생각해보기
// max < 나머지 변이 될 수 있는 수 < max + min
// (max + min) - (max + 1) -> min + min - 1 -> min * 2 + 1
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}

let sides = [11, 7];
console.log(solution(sides));
