const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `baekjoon`
).trim();

let answer = "";

for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
  answer += `${input.indexOf(String.fromCharCode(i))} `;
}

console.log(answer);
