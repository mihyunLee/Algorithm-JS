const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `58`
).trim();

const N = input;
let range = 1,
  limit = 1;

while (limit < N) {
  limit += 6 * range;

  range++;
}

console.log(range);
