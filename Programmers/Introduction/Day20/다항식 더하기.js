function solution(polynomial) {
  let answer = [];
  const arr = polynomial.split(" + ");

  const xNum = arr
    .filter((v) => v.includes("x"))
    .reduce((acc, val) => acc + (parseInt(val) || 1), 0);
  const num = arr
    .filter((v) => !v.includes("x"))
    .reduce((acc, val) => acc + parseInt(val), 0);

  if (xNum) xNum === 1 ? answer.push("x") : answer.push(`${xNum}x`);
  if (num) answer.push(num);

  return answer.join(" + ");
}

let polynomial = "x";
console.log(solution(polynomial));
