function solution(arr) {
  let min = arr[0];

  arr.forEach((item) => (min = min > item ? item : min));

  const filtered = arr.filter((item) => item !== min);

  return filtered.length > 0 ? filtered : [-1];
}
