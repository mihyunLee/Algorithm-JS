const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `2
      3 ABC
      5 /HTP`
).split("\n");

const T = input[0];

for (let i = 1; i <= T; i++) {
  let answer = "";
  let [R, S] = input[i].trim().split(" ");

  for (let j = 0; j < S.length; j++) {
    answer += S[j].repeat(R);
  }
  console.log(answer);
}
