function solution(hp) {
  let result = 0;
  let ants = [5, 3, 1];

  let i = 0;
  while (hp > 0) {
    let count = parseInt(hp / ants[i]);

    result += count;
    hp -= ants[i] * count;
    i++;
  }

  return result;
}

// 나머지 활용
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}

console.log(solution(hp));

let hp = 999;

console.log(solution(hp));
