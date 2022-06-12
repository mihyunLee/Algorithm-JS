const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `A`
).trim();

const asciiCode = input.charCodeAt(0);

console.log(asciiCode);
