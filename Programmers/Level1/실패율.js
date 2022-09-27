function solution(N, stages) {
  const failRatio = [];

  for (let i = 1; i <= N; i++) {
    const clear = stages.filter((stage) => stage >= i).length;
    const failPlayer = stages.filter((stage) => stage === i).length;

    failRatio.push([i, failPlayer / clear]);
  }

  failRatio.sort((a, b) => b[1] - a[1]);

  return failRatio.map((item) => item[0]);
}
