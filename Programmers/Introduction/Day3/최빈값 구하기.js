function solution(array) {
  if (array.length === 1) return array[0];

  const counter = array.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: (acc[cur] || 0) + 1,
    }),
    {}
  );

  const items = Object.keys(counter)
    .map((key) => [Number(key), counter[key]])
    .sort((a, b) => b[1] - a[1]);

  if (items[0][1] === items[1]?.[1]) {
    return -1;
  }

  return items[0][0];
}

let array = [1, 2, 3, 3, 3, 4];
console.log(solution(array));

/**
 * ? 궁금한 점. array의 길이가 1일 경우에 값을 리턴하기 때문에
 * ? 이후 코드는 array의 길이가 2 이상일 때 실행된다.
 * ? 그렇다면 itmes 요소는 무조건 2개 이상일텐데
 * ? 조건식에서 왜 옵셔널 체이닝을 사용해주어야 할까
 *
 * 길이가 2 이상이어도 모든 원소의 값이 동일하다면,
 * items에는 하나의 요소만 존재하기 때문이다.
 */
