function solution(quiz) {
  let answer = [];
  let flag = 1;

  for (const exp of quiz) {
    const [X, op, Y, _, Z] = exp.split(" ");
    // 틀린 풀이
    // const [X, op, Y, _, Z] = exp.split(" ").map((v) => Number(v) || v);
    // Number('0')은 falsy 값이므로 숫자형 변환이 아닌 문자열 '0'이 나오게 되므로 주의

    if (op === "+") {
      flag = 1;
    } else {
      flag = -1;
    }

    if (+X + flag * +Y === +Z) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  }

  return answer;
}

let quiz = ["-3 - -3 = 0"];
console.log(solution(quiz));
