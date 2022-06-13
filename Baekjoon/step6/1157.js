const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `Mississipi`
).trim();

const convertedStr = input.toUpperCase().split("").sort();

let count = 0;
let max = 0;
let maxStr = "";

for (let i = 0; i < convertedStr.length; i++) {
  if (i > 0 && convertedStr[i] !== convertedStr[i - 1]) {
    count = 0;
    count++;
  } else {
    count++;
    if (max < count) {
      max = count;
      maxStr = convertedStr[i];
    } else if (max === count) {
      maxStr = "?";
    } else {
      maxStr = maxStr;
    }
  }
}

console.log(maxStr);
