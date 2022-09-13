function solution(n, arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < n; i++) {
    newArr.push((arr1[i] | arr2[i]).toString(2));
  }

  return newArr.map((item) =>
    item
      .padStart(n, 0)
      .split("")
      .map((num) => (num === "1" ? "#" : " "))
      .join("")
  );
}
