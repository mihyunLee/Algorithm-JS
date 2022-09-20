function solution(answers) {
  let result = [];

  const supoza1 = [1, 2, 3, 4, 5];
  const supoza2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supoza3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const score1 = answers.filter(
    (ans, i) => ans === supoza1[i % supoza1.length]
  ).length;
  const score2 = answers.filter(
    (ans, i) => ans === supoza2[i % supoza2.length]
  ).length;
  const score3 = answers.filter(
    (ans, i) => ans === supoza3[i % supoza3.length]
  ).length;

  const max = Math.max(score1, score2, score3);

  if (score1 === max) {
    result.push(1);
  }
  if (score2 === max) {
    result.push(2);
  }
  if (score3 === max) {
    result.push(3);
  }

  return result;
}
