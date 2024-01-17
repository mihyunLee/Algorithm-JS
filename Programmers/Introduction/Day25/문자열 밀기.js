function solution(A, B) {
  let arr = [...A];

  for (let i = 0; i < arr.length; i++) {
    if (A === B) return i;
    else {
      arr.unshift(arr.pop());
      if (arr.join("") === B) return i + 1;
    }
  }

  return -1;
}

// 다른 풀이
function solution(A, B) {
  return (B + B).indexOf(A);
}

let A = "hello",
  B = "ohell";
console.log(solution(A, B));
