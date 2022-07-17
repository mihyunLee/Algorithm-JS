function solution(s) {
  let arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i]
      .split("")
      .map((item, index) =>
        index % 2 === 0 ? item.toUpperCase() : item.toLowerCase()
      )
      .join("");
  }

  return arr.join(" ");
}
