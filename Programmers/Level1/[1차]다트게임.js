function solution(dartResult) {
  let cal = [];
  let score = 0;
  let temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      } else {
        temp = dartResult[i];
      }
    }

    switch (dartResult[i]) {
      case "S":
        cal.push(Math.pow(temp, 1));
        break;
      case "D":
        cal.push(Math.pow(temp, 2));
        break;
      case "T":
        cal.push(Math.pow(temp, 3));
        break;
      case "*":
        cal[cal.length - 1] *= 2;
        cal[cal.length - 2] *= 2;
        break;
      case "#":
        cal[cal.length - 1] *= -1;
        break;
    }
  }

  score = cal.reduce((acc, val) => acc + val, 0);

  return score;
}
