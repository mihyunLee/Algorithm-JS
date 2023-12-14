function solution(money) {
  const coffee = 5500;
  const cup = parseInt(money / 5500);

  return [cup, money - coffee * cup];
}

let money = 5500;
console.log(solution(money));
