function solution(k, score) {
  let temple = [];
  let answer = [];

  score.forEach((v) => {
    let min = Math.min(...temple);

    if (temple.length < k) {
      temple.push(v);
    } else if (v > min) {
      // 가장 낮은 점수와 더 높은 현재 점수를 교체
      temple[temple.indexOf(min)] = v;
    }

    answer.push(Math.min(...temple));
  });

  return answer;
}

// 스택 사용해서 풀기
// sort로 정렬 후 가장 낮은 순위를 빼준다.
function solution(k, score) {
  const stack = [];
  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }
    a.push(stack[0]);
    return a;
  }, []);
}

let k = 3,
  score = [10, 100, 20, 150, 1, 100, 200];
console.log(solution(k, score));
