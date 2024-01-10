function solution(cipher, code) {
  let answer = "";

  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }

  return answer;
}

let cipher = "dfjardstddetckdaccccdegk",
  code = 4;

console.log(solution(cipher, code));
