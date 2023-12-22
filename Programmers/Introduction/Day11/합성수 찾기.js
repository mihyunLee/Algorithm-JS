function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    const measures = [];

    // 약수는 짝을 이루기 때문에 Math.sqrt() 사용
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        measures.push(j);

        // 약수가 i의 제곱근이 아닐 경우만 짝을 이루는 약수를 배열에 저장
        if (i / j !== j) measures.push(i / j);
      }
    }

    if (measures.length > 2) answer++;
  }

  return answer;
}

let n = 10;
console.log(solution(n));
