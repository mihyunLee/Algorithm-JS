function solution(before, after) {
  return [...before].sort().filter((v, idx) => v === [...after].sort()[idx])
    .length === before.length
    ? 1
    : 0;
}

// 더 간단하게 풀이하기
function solution(before, after) {
  return [...before].sort().join("") === [...after].sort().join("") ? 1 : 0;
}

let before = "olleh",
  after = "hello";
console.log(solution(before, after));
