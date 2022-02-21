const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `23 59
    1000`
)
  .trim()
  .split("\n");

const currentTime = stdin[0].split(" ").map(Number);
const [currentHour, currentMinutes] = currentTime;
const requireTime = Number(stdin[1]);

const cookTime = currentHour * 60 + currentMinutes + requireTime;
const endTimeHour = parseInt(cookTime / 60);
const endTimeMinutes = cookTime % 60;

console.log(endTimeHour >= 24 ? endTimeHour - 24 : endTimeHour, endTimeMinutes);
