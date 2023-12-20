// 기존 풀이 방식

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// function solution(balls, share) {
//   return factorial(balls) / (factorial(balls - share) * factorial(share));
// }

// ! 업데이트 이후
// ! factorial의 결과 값이 int 범위에서 벗어날 경우 계산 오류가 발생할 수 있다.
// ! 현재 문제에서 주어진 balls와 share이 0 < balls, share <= 30 이기 때문에
// ! 고려된 사항이다. (30! ===  265252859812191058636308480000000)

// 따라서 BigInt 자료형을 사용해야 한다.

function solution(balls, share) {
  let factorial = [BigInt(1)];

  for (let i = 1; i <= balls; i++) {
    factorial[i] = factorial[i - 1] * BigInt(i);
  }

  return factorial[balls] / (factorial[balls - share] * factorial[share]);
}

// BigInt 자료형을 사용하지 않을 때
// Math.round() 사용
// 무한 소수를 유한 소수로 저장하는 과정에서 오차가 발생할 수 있기 때문에
// parseInt()도 아닌, Math.round()를 사용해주어야 한다.
// https://joooing.tistory.com/entry/Javascript-%EC%86%8C%EC%88%98%EC%A0%90floating-point-%EA%B3%84%EC%82%B0-%EC%98%A4%EB%A5%98
function factorial(n) {
  if (n === 0) {
    // balls - share가 0이 될 수도 있기 때문에 주의
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function solution(balls, share) {
  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
}

let balls = 3,
  share = 2;

console.log(solution(balls, share));

/**
 * 서로 다른 n개 중 m 개를 뽑는 경우의 수 공식 (순서 고려 X)
 *
 * nCm
 * n! / ((n-m)! * m!)
 *
 * ? 순서를 고려한다면
 * nPm
 * n! / (n-m)!
 */
