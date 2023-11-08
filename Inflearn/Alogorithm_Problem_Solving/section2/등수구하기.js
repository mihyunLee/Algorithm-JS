/**
 * 
N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는
프로그램을 작성하세요.

▣ 입력설명
첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력
된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데
92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.

▣ 출력설명
입력된 순서대로 등수를 출력한다.

▣ 입력예제 1
5
87 89 92 100 76

▣ 출력예제 1
4 3 2 1 5
 */

function solution(input) {
  const scores = input
    .trim()
    .split(" ")
    .map((el) => +el);

  const answer = new Array(scores.length).fill(0);
  let rank = 1;

  for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores.length; j++) {
      if (i === j) continue;

      if (scores[i] < scores[j]) {
        rank++;
      }
    }

    answer[i] = rank;
    rank = 1;
  }

  return answer.join(" ");
}

solution("87 89 92 100 76");

// 다른 풀이 1.
/**
 * - rank라는 변수를 추가로 사용하지 않아도 된다.
 */

function solution(input) {
  const scores = input
    .trim()
    .split(" ")
    .map((el) => +el);

  let n = scores.length;
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (scores[j] > scores[i]) answer[i]++;
    }
  }

  return answer.join(" ");
}

// 다른 풀이 2.
/**
 * - 이중 for문을 사용하지 않아 시간 복잡도가 O(n)이 된다.
 */

function solution(input) {
  const scores = input
    .trim()
    .split(" ")
    .map((el) => +el);

  let copy = scores.slice().sort((a, b) => b - a);

  return copy.map((it) => scores.indexOf(it) + 1);
}
