function solution(arr1, arr2) {
  return arr1.map((item1, index1) =>
    item1.map((item2, index2) => item2 + arr2[index1][index2])
  );
}
