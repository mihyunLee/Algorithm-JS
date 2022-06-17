process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  for (let i = 0; i < Number(n[1]); i++) {
    console.log("*".repeat(Number(n[0])));
  }
});
