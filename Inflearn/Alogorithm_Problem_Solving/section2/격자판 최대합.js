/**
 * 
5*5 격자판에 아래와 같이 숫자가 적혀있습니다.
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19
N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합
니다.

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
다.

▣ 출력설명
최대합을 출력합니다.

▣ 입력예제 1
5
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19

▣ 출력예제 1
155
 */

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = 0,
    sum2 = 0;

  // 행, 열 탐색
  // arr[행][열]
  for (let i = 0; i < n; i++) {
    // 다음 비교를 위해 초기화
    sum1 = sum2 = 0;

    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j]; // 행 고정 열 변동 -> 가로의 합 -> 행의 합
      sum2 += arr[j][i]; // 행 변동 열 고정 -> 세로의 합 -> 열의 합
    }

    answer = Math.max(answer, sum1, sum2);
  }

  // 다음 비교를 위해 초기화
  sum1 = sum2 = 0;

  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i]; // 왼쪽(0, 0) 시작 대각선의 합
    sum2 += arr[i][n - i - 1]; // 오른족 시작(n-1, 0) 대각선의 합
  }

  answer = Math.max(answer, sum1, sum2);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(arr));

/**
 * 다른 풀이 - for문 하나 줄이기
 */

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sumRow = (sumCol = sumCross = sumReverseCross = 0);

  // 행, 열 탐색
  // arr[행][열]
  for (let i = 0; i < n; i++) {
    // 다음 비교를 위해 초기화
    sumRow = sumCol = 0;

    for (let j = 0; j < n; j++) {
      sumRow += arr[i][j]; // 행 고정 열 변동 -> 가로의 합 -> 행의 합
      sumCol += arr[j][i]; // 행 변동 열 고정 -> 세로의 합 -> 열의 합

      // 대각선
      if (i === j) {
        sumCross += arr[i][j];
      }

      // 역 대각선
      if (j === n - i - 1) {
        sumReverseCross += arr[i][j];
      }
    }

    answer = Math.max(answer, sumRow, sumCol, sumCross, sumReverseCross);
  }

  return answer;
}

console.log(solution(arr));
