function solution(array) {
  let count = 0;
  const strArray = array.map((v) => v.toString());

  for (let i = 0; i < strArray.length; i++) {
    count += strArray[i].split("").filter((v) => +v === 7).length;
  }

  return count;
}

// 다른 풀이 - array 원소들을 합쳐 7의 개수를 세면 간단하게 해결 가능
function solution(array) {
  return array.join("").split("7").length - 1;
}

let array = [7, 77, 17];

console.log(solution(array));
