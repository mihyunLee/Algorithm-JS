const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `5
      5 50 50 70 80 100
      7 100 95 90 80 70 60 50
      3 70 90 80
      3 70 90 81
      9 100 99 98 97 96 95 94 93 91`
).split("\n");

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let [student, ...score] = input[i].trim().split(" ");

  let avg = score.reduce((sum, v) => (sum += v * 1), 0) / student;
  let count = 0;

  for (let j = 0; j < student; j++) {
    if (avg < score[j]) {
      count++;
    }
  }

  console.log(`${((count / student) * 100).toFixed(3)}%`);
}
