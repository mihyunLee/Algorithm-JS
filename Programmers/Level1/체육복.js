function solution(n, lost, reserve) {
  let answer = 0;

  let realLost = lost
    .sort((a, b) => a - b)
    .filter((student) => !reserve.includes(student));
  let realReserve = reserve
    .sort((a, b) => a - b)
    .filter((student) => !lost.includes(student));

  let finalLost = realLost.filter((lost) => {
    const lend = realReserve.find((reserve) => Math.abs(reserve - lost) === 1);

    if (!lend) return lost;

    realReserve = realReserve.filter((reserve) => reserve != lend);
  });

  answer = n - finalLost.length;

  return answer;
}
