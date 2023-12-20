function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function solution(balls, share) {
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}

let balls = 3,
  share = 2;

console.log(solution(balls, share));
