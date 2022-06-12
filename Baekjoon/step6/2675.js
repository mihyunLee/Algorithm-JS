const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `2
      3 ABC
      5 /HTP`
).split("\n");

const T = input[0];
let answer = "";

for (let i = 1; i <= T; i++) {
  let R = input[i].trim()[0];
  let [...S] = input[i].trim().split(" ")[1];

  answer += `${S.map((item) => item.repeat(R)).join("")}\n`;
}

console.log(answer);
