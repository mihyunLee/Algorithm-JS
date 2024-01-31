function solution(s) {
  let answer = [];
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    // stack에 해당 문자열이 없을 경우
    if (!stack.includes(s[i])) {
      // -1 입력, stack에 해당 문자열 넣기
      stack.push(s[i]);
      answer.push(-1);
    } else {
      // stack에 해당 문자열이 이미 있을 경우 (자신보다 앞에 글자가 있는 경우)
      let count = 1;
      let j = 0;

      while (stack[i - j - 1] !== s[i]) {
        // stack의 뒤에서부터 같은 문자열을 찾으며 count 증가
        count++;
        j++;
      }
      stack.push(s[i]);
      answer.push(count);
    }
  }

  return answer;
}

/**
 * map 사용(1) + hash 사용하기

function solution(s) {
    const hash={};

    return [...s].map((v,i)=>{
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
}
 */

/**
 * map 사용(2)
 * 자신을 제외한 앞에까지의 문자열 중 자신과 동일한 문자의 인덱스(count)를 구한다.
 * count가 0보다 작다면 자신과 동일한 문자가 앞에 없다는 의미
 * count가 0보다 크다면 자신과 동일한 문자가 앞에 있고, 자신의 인덱스에서 count를 빼면
 * 몇 번째 앞에 있는지 알 수 있음

const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
 */

let s = "banana";
console.log(solution(s));
