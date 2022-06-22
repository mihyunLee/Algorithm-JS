const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `2
    1
    3
    2
    3`
).split("\n");

const [T, ...data] = input;
const test_case = [];

for (let i = 0; i < data.length; i += 2) {
  test_case.push(data.map((num) => num.replace(/(\s*)/g, "")).slice(i, i + 2)); // slice() 메서드는 end 미포함이므로 i+2까지 지정
}

for (let i = 0; i < T; i++) {
  const k = Number(test_case[i][0]);
  const n = Number(test_case[i][1]);

  const resident = Array.from(Array(k + 1), () => new Array(n).fill(0));

  // 0층에 i호에는 i명이 산다.
  for (let i = 1; i <= n; i++) {
    resident[0][i] = i;
  }

  // k층 n호에는 (k-1층 n호) + (k층 n-1호)명이 산다.
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      resident[i][j] = resident[i - 1][j] + resident[i][j - 1];
    }
  }

  console.log(resident[k][n]);
}
