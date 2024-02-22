function solution(X, Y) {
  let answer = "";

  for (let i = 0; i < 10; i++) {
    let xCnt = [...X].filter((x) => Number(x) === i).length;
    let yCnt = [...Y].filter((y) => Number(y) === i).length;

    answer += i.toString().repeat(Math.min(xCnt, yCnt));
  }

  if (answer === "") {
    return "-1";
  } else if (parseInt(answer) === 0) {
    return "0";
  } else {
    return [...answer].sort((a, b) => b - a).join("");
  }
}

let X = "100",
  Y = "123450";
console.log(solution(X, Y));
