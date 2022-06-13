const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `WA`
)
  .trim()
  .split("");

const dial = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

let time = 0;

for (let i = 0; i < input.length; i++) {
  let value = Object.values(dial).filter((values) => values.includes(input[i]));
  let num = Object.keys(dial).find((key) => dial[key] === value.toString());

  time += Number(num) + 1;
}

console.log(time);
