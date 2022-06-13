const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `Mississipi`
).trim();

const usageStatus = {};

input
  .toUpperCase()
  .split("")
  .forEach((key) => {
    usageStatus[key] = (usageStatus[key] || 0) + 1;
  });

const sortedValue = Object.values(usageStatus).sort((a, b) => b - a);
const maxValue = sortedValue[0];
const maxKey =
  sortedValue[0] === sortedValue[1]
    ? "?"
    : Object.keys(usageStatus).find((key) => usageStatus[key] === maxValue);

console.log(maxKey);
