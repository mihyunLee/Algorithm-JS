const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `1000 70 170`
).trim();

const [fixedCost, variableCost, laptopCost] = input.split(" ").map(Number);

const margin = laptopCost - variableCost;
const count = Math.floor(fixedCost / margin) + 1;
console.log(margin <= 0 ? -1 : count);
