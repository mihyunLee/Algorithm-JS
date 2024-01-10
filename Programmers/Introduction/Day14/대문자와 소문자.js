function solution(my_string) {
  const reg = /[a-z]/;

  return [...my_string]
    .map((el) => (reg.test(el) ? el.toUpperCase() : el.toLowerCase()))
    .join("");
}

let my_string = "cccCCC";
console.log(solution(my_string));
