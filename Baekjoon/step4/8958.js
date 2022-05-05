const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `5
      OOXXOXXOOO
      OOXXOOXXOO
      OXOXOXOXOXOXOX
      OOOOOOOOOO
      OOOOXOOOOXOOOOX`
).split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  let count = 0;
  let sum = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }

    sum += count;
  }

  console.log(sum);
}
