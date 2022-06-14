let input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `ljes=njak`
).trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
croatia.map((item) => (input = input.split(item).join("A")));

console.log(input.length);
