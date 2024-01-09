function solution(s) {
  return s
    .split(" ")
    .map((el) => +el)
    .reduce(
      (acc, val, idx, arr) =>
        Number.isNaN(val) ? acc - arr[idx - 1] : acc + val,
      0
    );
}

// 스택으로 생각해보기
function solution(s) {
  const stack = [];

  s.split(" ").forEach((target) => {
    if (target === "Z") stack.pop();
    else stack.push(+target);
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur, 0) : 0;
}

let s = "1 2 Z 3";
console.log(solution(s));
