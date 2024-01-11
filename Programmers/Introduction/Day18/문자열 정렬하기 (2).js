function solution(my_string) {
  return my_string.toLowerCase().split("").sort().join("");
}

let my_string = "Bcad";

console.log(solution(my_string));
