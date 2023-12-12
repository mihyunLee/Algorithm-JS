// 최대 공약수 구하기
function calGcd(a, b) {
  return a % b === 0 ? b : calGcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;
  let gcd = calGcd(numer, denom);

  return [numer / gcd, denom / gcd];
}

let numer1 = 1,
  denom1 = 2,
  numer2 = 3,
  denom2 = 4;
console.log(solution(numer1, denom1, numer2, denom2));
