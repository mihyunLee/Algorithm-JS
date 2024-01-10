function solution(s) {
  const charCount = [...s].reduce((acc, val) => {
    return { ...acc, [val]: (acc[val] || 0) + 1 };
  }, {});

  return Object.keys(charCount)
    .filter((char) => charCount[char] === 1)
    .sort()
    .join("");
}

// 다른 사람의 풀이
// 문자가 나오는 첫 인덱스와 끝 인덱스 비교
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}

let s = "hello";
console.log(solution(s));
