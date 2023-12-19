function solution(emergency) {
  return emergency.map(
    (v) => [...emergency].sort((a, b) => b - a).indexOf(v) + 1
  );
}

// 76 24 3
// 1 2 3 -> index
// result: 3 1 2

let emergency = [3, 76, 24];
console.log(solution(emergency));
