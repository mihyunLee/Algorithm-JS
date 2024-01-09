function solution(my_string) {
  return my_string.match(/\d/g).reduce((acc, val) => acc + parseInt(val), 0);
}

let my_string = "aAb1B2cC34oOp";

console.log(solution(my_string));
