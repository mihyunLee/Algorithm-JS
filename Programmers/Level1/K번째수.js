function solution(array, commands) {
  const answer = [];

  for (let i = 0; i < commands.length; i++) {
    const [begin, end, k] = commands[i];
    answer.push(array.slice(begin - 1, end).sort((a, b) => a - b)[k - 1]);
  }

  return answer;
}
