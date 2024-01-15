function solution(babbling) {
  return babbling.filter((v) => v.replace(/aya|ye|woo|ma/g, "") === "").length;
}

let babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];
console.log(solution(babbling));
