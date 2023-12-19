function solution(my_string, letter) {
  const reg = new RegExp(letter, "g");

  return my_string.replace(reg, "");
}

let my_string = "abcdef",
  letter = "f";
console.log(solution(my_string, letter));
