function solution(numbers, hand) {
  const middleKey = [2, 5, 8, 0];
  let result = "";
  let left = [3, 0];
  let right = [3, 2];
  let middle = [0, 0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 1) {
      result += "L";
      left = [Math.floor(numbers[i] / 3), 0];
    } else if (numbers[i] % 3 === 0 && numbers[i] !== 0) {
      result += "R";
      right = [Math.floor(numbers[i] / 3) - 1, 2];
    } else {
      // 누를 키의 위치 저장
      middle = [middleKey.indexOf(numbers[i]), 1];

      // 왼손과 누를 키의 거리
      let lLength =
        Math.abs(left[0] - middle[0]) + Math.abs(left[1] - middle[1]);
      // 오른손과 누를 키의 거리
      let rLength =
        Math.abs(right[0] - middle[0]) + Math.abs(right[1] - middle[1]);

      if (lLength === rLength) {
        hand === "left"
          ? ((left = middle), (result += "L"))
          : ((right = middle), (result += "R"));
      } else if (lLength < rLength) {
        result += "L";
        left = middle;
      } else {
        result += "R";
        right = middle;
      }
    }
  }

  return result;
}
