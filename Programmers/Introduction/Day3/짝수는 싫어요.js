function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) answer.push(i);
  }

  /*
	## 조건식을 줄일 수 있는 방법
	for (let i = 1; i <=n; i+=2){
		answer.push(i);
	}
	*/

  return answer;
}

let n = 10;
console.log(solution(n));
