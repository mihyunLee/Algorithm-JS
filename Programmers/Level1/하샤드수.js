function solution(x) {
  let answer = true;
  let sum = 0;

  for (let i = 0; i < String(x).length; i++) {
    sum += Number(String(x)[i]);
  }

  answer = x % sum === 0;

  return answer;
}
