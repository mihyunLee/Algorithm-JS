function solution(my_string) {
  const reg = /[0-9]/g;
  return my_string
    .match(reg)
    .map((el) => +el)
    .sort();
}

let my_string = "hi12392";

console.log(solution(my_string));
