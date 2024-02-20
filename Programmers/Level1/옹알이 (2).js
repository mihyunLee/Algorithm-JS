function solution(babbling) {
  const regex1 = /(aya|ye|woo|ma)\1+/; // 연속된 단어가 있는지
  const regex2 = /^(aya|ye|woo|ma)+$/; // 옹알이 할 수 있는 단어만 있는지

  return babbling.filter((v) => !regex1.test(v) && regex2.test(v)).length;
}

let babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];
console.log(solution(babbling));
