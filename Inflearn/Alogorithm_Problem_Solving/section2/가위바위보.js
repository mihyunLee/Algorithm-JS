/**
 * A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고,
B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.

가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.

예를 들어 N=5이면

회수 1 2 3 4 5
A의 정보 2 3 3 1 3
B의 정보 1 1 2 2 3
승자 A B A B D

두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램
을 작성하세요.

▣ 입력설명
첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.
세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.

▣ 출력설명
각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.

▣ 입력예제 1
5
2 3 3 1 3
1 1 2 2 3

▣ 출력예제 1
A
B
A
B
D
 */

function solution(input) {
  const [N, arr1, arr2] = input.trim().split("\n");
  const infoA = arr1.split(" ").map((el) => +el);
  const infoB = arr2.split(" ").map((el) => +el);
  let answer = [];

  for (let i = 0; i < N; i++) {
    switch (infoA[i]) {
      case infoB[i]:
        answer.push("D");
        break;
      case 1:
        answer.push(infoB[i] === 3 ? "A" : "B");
        break;
      case 2:
        answer.push(infoB[i] === 1 ? "A" : "B");
        break;
      case 3:
        answer.push(infoB[i] === 2 ? "A" : "B");
        break;
      default:
        break;
    }
  }

  console.log(answer.join("\n"));
}

solution(`5
2 3 3 1 3
1 1 2 2 3
`);
