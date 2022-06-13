const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `The Curious Case of Benjamin Button`
).trim();

console.log(input === "" ? 0 : input.split(" ").length);
