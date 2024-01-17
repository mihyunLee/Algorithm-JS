function solution(common) {
  // 등차수열 일 때
  if (common[1] - common[0] === common[2] - common[1]) {
    return common.at(-1) + common[1] - common[0];
  } else {
    // 등비수열 일 때
    return common.at(-1) * Math.floor(common[1] / common[0]);
  }
}

let common = [1, 2, 3, 4];

console.log(solution(common));
