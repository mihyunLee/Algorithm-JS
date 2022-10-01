function solution(lottos, win_nums) {
  let answer = [];
  let count = 0;

  const zero = lottos.includes(0) && lottos.length - new Set(lottos).size + 1;
  lottos.map((num) => (win_nums.includes(num) ? count++ : null));

  answer.push(count + zero, count);

  for (let i = 0; i < answer.length; i++) {
    switch (answer[i]) {
      case 6:
        answer[i] = 1;
        break;
      case 5:
        answer[i] = 2;
        break;
      case 4:
        answer[i] = 3;
        break;
      case 3:
        answer[i] = 4;
        break;
      case 2:
        answer[i] = 5;
        break;
      default:
        answer[i] = 6;
    }
  }

  return answer;
}
