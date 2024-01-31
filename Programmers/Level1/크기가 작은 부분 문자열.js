function solution(t, p) {
  let count = 0;

  for (let i = 0; i < t.length; i++) {
    let temp = t.slice(i, i + p.length);

    if (temp.length === p.length && parseInt(temp) <= parseInt(p)) {
      count++;
    }
  }

  return count;
}

// for문에서 i의 범위를 t.length - p.length 까지로 잡는 것이 더 좋다.
// p의 길이와 동일한 temp를 비교해야 하기 때문에
// t[t.length - p.length] 부터 시작하는 문자열까지만 비교하면 된다.

// ex) t='1234' p='12'
// 1) '12', '12' 비교
// 2) '23', '12' 비교
// 3) '34', '12' 비교
// 4) '4' 는 비교 대상 X
// 즉 t.length - p.length = 2 이고 t[3]부터 시작하는 문자열은 비교하지 않아도 된다.

let t = "3141592",
  p = "271";

console.log(solution(t, p));
