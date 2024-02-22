function solution(s) {
  let result = 0;
  let x = "";
  let xCount = 0;
  let otherCount = 0;

  for (let c of s) {
    if (!x) x = c;

    if (x === c) xCount++;
    else otherCount++;

    if (xCount === otherCount) {
      result++;
      xCount = 0;
      otherCount = 0;
      x = "";
    }
  }

  if (x) result++;

  return result;
}

// count 하나로 풀이하기
function solution(s) {
  let answer = 0;
  let current;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      answer++;
      current = s[i];
      count = 1;
    } else {
      if (current !== s[i]) count--;
      else count++;
    }
  }

  return answer;
}

let s = "aaabbaccccabba";
console.log(solution(s));
