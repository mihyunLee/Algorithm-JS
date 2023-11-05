/**
 * 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에
서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그
램을 작성하세요. (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)

▣ 입력설명
첫 줄에 정수 N이 입력된다. 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.

▣ 출력설명
선생님이 볼 수 있는 최대학생수를 출력한다.

▣ 입력예제 1
8
130 135 148 140 145 150 150 153

▣ 출력예제 1
5
 */

function solution(input) {
  const heights = input
    .trim()
    .split("\n")[1]
    .split(" ")
    .map((el) => +el);

  // 첫 번째 서 있는 학생은 무조건 볼 수 있다.
  const answer = [heights[0]];

  for (let i = 1; i < heights.length; i++) {
    if (Math.max(...answer) < heights[i]) {
      answer.push(heights[i]);
    }
  }

  console.log(answer.length);
}

function solution(input) {
  const heights = input
    .trim()
    .split("\n")[1]
    .split(" ")
    .map((el) => +el);

  let answer = 1,
    max = heights[0];

  for (let i = 1; i < heights.length; i++) {
    if (heights[i] > max) {
      answer++;
      max = heights[i];
    }
  }

  console.log(answer.length);
}

solution(`8
130 135 148 140 145 150 150 153
`);

/**
 * 두 함수 모두 시간 복잡도는 O(n)으로 동일하지만,
 * 첫 번째 함수의 경우 Math.max로 인해 두 번째 함수보다 실행 시간이 더 소요된다.
 */
